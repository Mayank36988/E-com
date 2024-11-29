const db = require('../../Config/db'); // Assuming you have a database connection module
const createError = require('http-errors');

// Add item to cart
exports.addItemToCart = async (req, res, next) => {
    const { cid, pid, quantity } = req.body;
  
    try {
      // Execute the query and store the full result in result
      const result = await db.query('SELECT * FROM tbl_customer_add_to_cart WHERE cid = ? AND pid = ?', [cid, pid]);
      
      // Check if the result is indeed an array and has the structure you expect
      const cartItem = result[0] ? result[0] : null;
  
      if (cartItem) {
        // If item exists, update the quantity
        await db.query('UPDATE tbl_customer_add_to_cart SET quantity = quantity + ? WHERE cid = ? AND pid = ?', [quantity, cid, pid]);
      } else {
        // If item does not exist, insert new item
        await db.query('INSERT INTO tbl_customer_add_to_cart (cart_id, cid, pid, quantity) VALUES (UUID(), ?, ?, ?)', [cid, pid, quantity]);
      }
  
      res.status(200).json({ message: "Item added to cart" });
    } catch (error) {
      console.error("Database error:", error.message); // Log the actual error for debugging
      next(createError(500, "Error adding item to cart"));
    }
  };
  
// View cart items

// exports.viewCartItems = async (req, res, next) => {
//     const { cid } = req.params;
//     console.log(cid);

//     try {
//         const query =   `SELECT c.cart_id, c.cid, c.pid, c.quantity, c.added_on, 
//                         p.productname, p.price 
//                         FROM tbl_customer_add_to_cart AS c
//                         JOIN tbl_retailer_products AS p ON c.pid = p.pid
//                         WHERE c.cid = ?`
//         // Execute the query and log the result
//         db.query(query, [cid], (err, results) => {
//             if (err) {
//               console.error("Database error:", err);
//               return res.status(500).json({ message: "Error retrieving cart items", error: err });
//             }
//             console.log("Query result:", results);
//             if (results.length === 0) {
//               return res.status(404).json({ message: "No items found in cart" });
//             }
//             res.status(200).json({ cartItems: results });
//           });
          
//     } catch (error) {
//         console.error("Database error:", error.message); // Log the actual error for debugging
//         next(createError(500, "Error retrieving cart items"));
//     }
// };

exports.viewCartItems = async (req, res, next) => {
    const { cid } = req.params;
    const gstRate = 18; // Example GST rate (you can adjust this as per your business logic)
    
    try {
        const query = `
            SELECT c.cart_id, c.cid, c.pid, c.quantity, c.added_on, 
                   p.productname, p.price
            FROM tbl_customer_add_to_cart AS c
            JOIN tbl_retailer_products AS p ON c.pid = p.pid
            WHERE c.cid = ?
        `;

        db.query(query, [cid], (err, results) => {
            if (err) {
                console.error("Database error:", err);
                return res.status(500).json({ message: "Error retrieving cart items", error: err });
            }
            console.log("Query result:", results);

            if (results.length === 0) {
                return res.status(404).json({ message: "No items found in cart" });
            }

            // Calculate grand total and GST
            let grandTotal = 0;
            let totalGST = 0;
            results.forEach(item => {
                const itemTotal = item.quantity * item.price;
                const itemGST = (itemTotal * gstRate) / 100;

                grandTotal += itemTotal;
                totalGST += itemGST;
            });

            const totalWithGST = grandTotal + totalGST;

            // Send the response with the cart items and calculated values
            res.status(200).json({
                cartItems: results,
                grandTotal: grandTotal, // Grand total without GST
                gstAmount: totalGST,     // GST amount
                totalWithGST: totalWithGST // Total including GST
            });
        });
    } catch (error) {
        console.error("Database error:", error.message);
        next(createError(500, "Error retrieving cart items"));
    }
};


  
// Update quantity of an item in the cart
// Update quantity of an item in the cart
exports.updateCartItemQuantity = (req, res, next) => {
    const { cid, pid, quantity } = req.body;
  
    // Query to check if the cart item exists
    const query = 'SELECT * FROM tbl_customer_add_to_cart WHERE cid = ? AND pid = ?';
    db.query(query, [cid, pid], (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ message: "Error checking cart item", error: err });
      }
  
      if (result.length === 0) {
        // If item does not exist in cart, return 404
        return res.status(404).json({ message: "Item not found in cart" });
      }
  
      // Update quantity if item exists
      const updateQuery = 'UPDATE tbl_customer_add_to_cart SET quantity = ? WHERE cid = ? AND pid = ?';
      db.query(updateQuery, [quantity, cid, pid], (err, updateResult) => {
        if (err) {
          console.error("Error updating cart item:", err);
          return res.status(500).json({ message: "Error updating cart item", error: err });
        }
        res.status(200).json({ message: "Cart quantity updated" });
      });
    });
  };
  
  // Remove item from cart
  exports.removeItemFromCart = (req, res, next) => {
    const { cid, pid } = req.body;
  
    // Query to check if the cart item exists
    const query = 'SELECT * FROM tbl_customer_add_to_cart WHERE cid = ? AND pid = ?';
    db.query(query, [cid, pid], (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ message: "Error checking cart item", error: err });
      }
  
      if (result.length === 0) {
        // If item does not exist in cart, return 404
        return res.status(404).json({ message: "Item not found in cart" });
      }
  
      // Delete the item from the cart
      const deleteQuery = 'DELETE FROM tbl_customer_add_to_cart WHERE cid = ? AND pid = ?';
      db.query(deleteQuery, [cid, pid], (err, deleteResult) => {
        if (err) {
          console.error("Error removing cart item:", err);
          return res.status(500).json({ message: "Error removing item from cart", error: err });
        }
        res.status(200).json({ message: "Item removed from cart" });
      });
    });
  };