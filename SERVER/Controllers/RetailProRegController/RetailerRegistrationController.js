const RetailerRegistration = require('../../Model/RetailerProReg/RetailerRegistration');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getAllRetailers = (req, res) => {
    RetailerRegistration.getAll((err, results) => {
        console.log('Results from database:', results); // Log the results to see what is being returned
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};


exports.getRetailerById = (req, res) => {
    RetailerRegistration.getById(req.params.retid, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

exports.createRetailer = (req, res) => {
    const retailerData = req.body;
    const saltRounds = 10;
    
    // Hash the password before saving it
    bcrypt.hash(retailerData.password, saltRounds, (err, hashedPassword) => {
        if (err) return res.status(500).json(err);

        // Store the hashed password
        retailerData.password = hashedPassword;

        RetailerRegistration.create(retailerData, (err, result) => {
            if (err) return res.status(500).json(err);
            res.status(201).json({ message: 'Retailer created successfully', retailerId: result.insertId });
        });
    });
};

exports.updateRetailerDetails = (req, res) => {
    const { retid } = req.params;
    const updateData = req.body;

    if (!updateData || Object.keys(updateData).length === 0) {
        return res.status(400).json({ message: 'No update data provided' });
    }

    // If the password is being updated, hash it
    if (updateData.password) {
        const saltRounds = 10;
        updateData.password = bcrypt.hashSync(updateData.password, saltRounds);
    }

    RetailerRegistration.update(retid, updateData, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json({ message: 'Retailer details updated successfully' });
    });
};

exports.deleteRetailer = (req, res) => {
    RetailerRegistration.delete(req.params.retid, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Retailer deleted successfully' });
    });
};




// exports.loginRetailer = (req, res) => {
//     const { retname, password } = req.body;

//     if (!retname || !password) {
//         return res.status(400).json({ message: 'Username and password are required' });
//     }

//     RetailerRegistration.getByName(retname, (err, results) => {
//         if (err) {
//             return res.status(500).json(err);
//         }
//         if (results.length === 0) {
//             return res.status(401).json({ message: 'Invalid credentials' });
//         }

//         const retailer = results[0];

//         bcrypt.compare(password, retailer.password, (err, isMatch) => {
//             if (err) return res.status(500).json(err);
//             if (!isMatch) {
//                 return res.status(401).json({ message: 'Invalid credentials' });
//             }

//             // Log retailer object for debugging
//             console.log('Retailer object:', retailer);

//             // Generate access token
//             const accessToken = jwt.sign(
//                 { retid: retailer.retid, retname: retailer.retname },
//                 process.env.JWT_SECRET_KEY || 'jwt-secret-key',
//                 { expiresIn: '1h' }
//             );

//             // Generate refresh token (longer expiry)
//             const refreshToken = jwt.sign(
//                 { retid: retailer.retid, retname: retailer.retname },
//                 process.env.JWT_REFRESH_SECRET_KEY || 'jwt-refresh-secret-key',
//                 { expiresIn: '7d' } // Set appropriate expiry for refresh token
//             );

//             // Log generated tokens for debugging
//             console.log('Generated Access Token:', accessToken);
//             console.log('Generated Refresh Token:', refreshToken);

//             // Set the access token in an HTTP-only cookie
//             res.cookie('access_token', accessToken, { httpOnly: true, sameSite: "Lax", secure: false }); // Ensure secure: true if using HTTPS

//             // Optionally, set the refresh token in a separate HTTP-only cookie
//             res.cookie('refresh_token', refreshToken, { httpOnly: true, sameSite: "Lax", secure: false }); // Secure: true for HTTPS

//             res.json({ 
//                 message: 'Login successful', 
//                 retailerId: retailer.retid, 
//                 accessToken: accessToken, 
//                 refreshToken: refreshToken // Send both tokens in response if needed
//             });
//         });
//     });
// };

exports.loginRetailer = (req, res) => {
    const { retname, password } = req.body;

    // Validate input
    if (!retname || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    // Retrieve retailer by username
    RetailerRegistration.getByName(retname, (err, results) => {
        if (err) {
            return res.status(500).json(err);
        }
        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const retailer = results[0];

        // Compare passwords
        bcrypt.compare(password, retailer.password, (err, isMatch) => {
            if (err) return res.status(500).json(err);
            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            // Generate access token
            const accessToken = jwt.sign(
                { retid: retailer.retid, retname: retailer.retname },
                process.env.JWT_SECRET_KEY || 'jwt-secret-key',
                { expiresIn: '1h' }
            );

            // Generate refresh token
            const refreshToken = jwt.sign(
                { retid: retailer.retid, retname: retailer.retname },
                process.env.JWT_REFRESH_SECRET_KEY || 'jwt-refresh-secret-key',
                { expiresIn: '7d' }
            );

            // Set cookies with tokens
            res.cookie('access_token', accessToken, { 
                httpOnly: true, 
                sameSite: "Lax", 
                secure: process.env.NODE_ENV === 'production' // Set to true if in production (HTTPS)
            });

            res.cookie('refresh_token', refreshToken, { 
                httpOnly: true, 
                sameSite: "Lax", 
                secure: process.env.NODE_ENV === 'production' 
            });

            // Send response
            res.json({ 
                message: 'Login successful', 
                retailerId: retailer.retid // Optional: Only send retailer ID if needed
            });
        });
    });
};



exports.logoutRetailer = (req, res) => {
    res.clearCookie('access_token'); // Clear the access token cookie
    res.clearCookie('refresh_token'); // Clear the refresh token cookie if applicable
    return res.status(200).json({ message: 'Logged out successfully' });
};

  