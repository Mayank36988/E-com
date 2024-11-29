const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const connection = require("../../Config/db");
const nodemailer = require("nodemailer");

// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// Function to generate a random OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit OTP
};

// Create customer
exports.createCustomer = async (req, res) => {
  const { customer_name, age, contact_no, email, gender, status, password } = req.body;

  try {
    // Hashing password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate simple CID (you can use auto-increment logic here)
    const cid = Math.floor(1000 + Math.random() * 9000);

    // Insert customer into database
    const query = `
      INSERT INTO tbl_customer_registration (cid, customer_name, age, contact_no, email, gender, status, password)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    connection.query(query, [cid, customer_name, age, contact_no, email, gender, status, hashedPassword], (error) => {
      if (error) {
        console.error("Database insertion error:", error); // Log the database error
        return res.status(500).json({ message: "Error creating customer", error: error.message });
      }

      // Email transporter setup
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      // Email content
      const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Welcome to Our Service!",
        html: `
          <div style="font-family: Arial, sans-serif; color: #333;">
            <h2 style="color: #4CAF50;">Welcome to Our Service, ${customer_name}!</h2>
            <p style="font-size: 16px;">Thank you for registering with us. Your account has been created successfully!</p>
            <hr style="border: 1px solid #4CAF50;">
            <p><strong>Your Customer ID:</strong> <span style="color: #4CAF50;">${cid}</span></p>
            <p><strong>Your Contact Number:</strong> ${contact_no}</p>
            <p><strong>Your Email:</strong> ${email}</p>
            <p><strong>Your Password:</strong> <span style="color: #4CAF50;">${password}</span></p>
            <p style="font-size: 14px; color: #555;">For security reasons, we do not store your password in plain text. Please use the password you created during registration.</p>
            <br>
            <p style="font-size: 16px;">Thank you for joining us!</p>
          </div>
        `,
      };

      // Sending email
      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          console.error("Email sending error:", error); // Log the email error
          return res.status(500).json({ message: "Customer created, but failed to send email.", error: error.message });
        }

        res.json({
          message: "Customer created and email sent",
          customerId: cid,
        });
      });
    });
  } catch (error) {
    console.error("Error creating customer:", error); // Log the error
    res.status(500).json({ message: "Error creating customer", error: error.message });
  }
};

// Customer login with OTP generation
exports.loginCustomer = async (req, res) => {
  const { contact_no, password } = req.body;

  try {
    connection.query("SELECT * FROM tbl_customer_registration WHERE contact_no = ?", [contact_no], async (error, results) => {
      if (error) {
        console.error("Error querying database:", error);
        return res.status(500).json({ message: "Error logging in", error: error.message });
      } 

      if (results.length === 0) {
        return res.status(404).json({ message: "Customer not found" });
      }

      const customer = results[0];
      const validPassword = await bcrypt.compare(password, customer.password);

      if (!validPassword) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const otp = generateOTP();
      req.session.otp = otp; // Store OTP in session
      req.session.customer = customer; // Store customer data in session

      // Debugging - Log generated OTP and stored session details
      console.log("Generated OTP:", otp);
      console.log("Session OTP stored:", req.session.otp);

      console.log('Session ID:', req.sessionID);

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
        secure: false,
        tls: {
          rejectUnauthorized: false
        }
      });

      const mailOptions = {
        from: process.env.EMAIL,
        to: customer.email,
        subject: "Your OTP Code",
        text: `Your OTP code is: ${otp}`,
      };

      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          console.error("Error sending email:", error);
          return res.status(500).json({ message: "Failed to send OTP email", error: error.message });
        }
        res.json({ message: "OTP sent to your email" });
      });
    });
  } catch (error) {
    console.error("Error logging in customer:", error);
    res.status(500).json({ message: "Error logging in customer", error: error.message });
  }
};


// OTP verification
// OTP verification
exports.verifyOTP = (req, res) => {
  const { otp } = req.body;

  // Debugging - Log stored OTP and entered OTP for verification
  console.log("Stored OTP in session:", req.session.otp);
  console.log("Entered OTP:", otp);
  console.log(req.session)
  console.log('Session ID:', req.sessionID);

  if (otp && otp == req.session.otp) {
    const customer = req.session.customer;
    const token = jwt.sign({ cid: customer.cid, customer_name: customer.customer_name }, JWT_SECRET, { expiresIn: "1h" });

    // Set JWT token as HTTP-Only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000, // 1 hour
    });

    // Clear OTP from session after successful verification
    delete req.session.otp;
    delete req.session.customer;

    res.json({
      message: "OTP verified, you are now logged in",
      customerId: customer.cid,
    });
  } else {
    res.status(400).json({ message: "Invalid OTP" });
  }
};


// Get all customers
exports.getAllCustomers = (req, res) => {
  connection.query("SELECT * FROM tbl_customer_registration", (error, results) => {
    if (error) {
      console.error("Error fetching customers:", error);
      return res.status(500).json({ message: "Error fetching customers", error: error.message });
    }
    res.json(results);
  });
};

// Get customer by ID
exports.getCustomerById = (req, res) => {
  const cid = req.params.cid;

  connection.query("SELECT * FROM tbl_customer_registration WHERE cid = ?", [cid], (error, results) => {
    if (error) {
      console.error("Error retrieving customer:", error);
      return res.status(500).json({ message: "Error retrieving customer", error: error.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Customer not found" });
    }

    const customer = results[0];
    res.json({ cid: customer.cid, customer_name: customer.customer_name });
  });
};

// Update customer
exports.updateCustomer = (req, res) => {
  const { cid } = req.params;
  const updates = req.body;

  let query = "UPDATE tbl_customer_registration SET ";
  const values = [];

  Object.keys(updates).forEach((key, index) => {
    query += `${key} = ?`;
    if (index < Object.keys(updates).length - 1) {
      query += ", ";
    }
    values.push(updates[key]);
  });

  query += " WHERE cid = ?";
  values.push(cid);

  connection.query(query, values, (error) => {
    if (error) {
      console.error("Error updating customer:", error);
      return res.status(500).json({ message: "Error updating customer", error: error.message });
    }
    res.json({ message: "Customer updated successfully" });
  });
};

// Logout customer
exports.logoutCustomer = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "You are logged out" });
};
