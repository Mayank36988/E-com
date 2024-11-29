// const Razorpay = require('razorpay');
// const { connection } = require('../../Config/db'); // DB connection

// // Razorpay instance setup
// const razorpay = new Razorpay({
//   key_id: 'rzp_test_RMrRKSDMGVDe6x',   // Replace with your Razorpay Key ID
//   key_secret: 'lOTANrhA5khByNmRlB61lx2w'  // Replace with your Razorpay Secret Key
// });

// const PaymentController = {
//   // Create Payment Order (for Razorpay Payment Gateway)
//   createPaymentOrder: async (req, res) => {
//     const { amount, currency = 'INR', paymentMethod, cid, order_id } = req.body;

//     try {
//       // Create Razorpay order
//       const options = {
//         amount: amount * 100, // Razorpay accepts amount in paise (1 INR = 100 paise)
//         currency: currency,
//         receipt: order_id,
//         payment_capture: 1  // auto capture payment after successful payment
//       };

//       razorpay.orders.create(options, (err, order) => {
//         if (err) {
//           return res.status(500).json({ message: 'Error creating Razorpay order', error: err });
//         }

//         // Insert payment record into tbl_payments
//         const query = `
//           INSERT INTO tbl_payments (payment_id, cid, order_id, amount, currency, status, payment_method, created_at, updated_at)
//           VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
//         `;
//         connection.query(query, [order.id, cid, order_id, amount, currency, 'pending', paymentMethod], (err, result) => {
//           if (err) {
//             console.error(err);
//             return res.status(500).json({ message: 'Error saving payment details' });
//           }
//           res.status(201).json({
//             message: 'Payment order created successfully!',
//             orderId: order.id,
//             amount: amount,
//             currency: currency,
//             paymentLink: order.short_url
//           });
//         });
//       });

//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ message: 'Error processing payment order' });
//     }
//   },

//   // Capture Payment (after payment successful)
//   capturePayment: async (req, res) => {
//     const { payment_id, order_id, amount } = req.body;

//     try {
//       const query = 'SELECT * FROM tbl_payments WHERE payment_id = ? AND order_id = ?';
//       connection.query(query, [payment_id, order_id], (err, rows) => {
//         if (err) {
//           console.error(err);
//           return res.status(500).json({ message: 'Error fetching payment' });
//         }

//         if (rows.length === 0) {
//           return res.status(404).json({ message: 'Payment not found' });
//         }

//         // Update payment status to completed
//         const updateQuery = 'UPDATE tbl_payments SET status = ?, updated_at = NOW() WHERE payment_id = ?';
//         connection.query(updateQuery, ['completed', payment_id], (err, result) => {
//           if (err) {
//             console.error(err);
//             return res.status(500).json({ message: 'Error updating payment status' });
//           }

//           // Capture payment via Razorpay
//           razorpay.payments.capture(payment_id, amount * 100, 'INR', (err, payment) => {
//             if (err) {
//               console.error(err);
//               return res.status(500).json({ message: 'Error capturing payment', error: err });
//             }

//             return res.status(200).json({
//               message: 'Payment captured successfully!',
//               paymentDetails: payment
//             });
//           });
//         });
//       });

//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ message: 'Error capturing payment' });
//     }
//   },

//   // Get Payment Details
//   getPaymentDetails: async (req, res) => {
//     const { payment_id } = req.params;

//     try {
//       const query = 'SELECT * FROM tbl_payments WHERE payment_id = ?';
//       connection.query(query, [payment_id], (err, rows) => {
//         if (err) {
//           console.error(err);
//           return res.status(500).json({ message: 'Error fetching payment details' });
//         }

//         if (rows.length === 0) {
//           return res.status(404).json({ message: 'Payment not found' });
//         }

//         return res.status(200).json(rows[0]);
//       });

//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ message: 'Error fetching payment details' });
//     }
//   },

//   // Update Payment Status (Optional)
//   updatePaymentStatus: async (req, res) => {
//     const { payment_id, status } = req.body;

//     try {
//       const query = 'UPDATE tbl_payments SET status = ?, updated_at = NOW() WHERE payment_id = ?';
//       connection.query(query, [status, payment_id], (err, result) => {
//         if (err) {
//           console.error(err);
//           return res.status(500).json({ message: 'Error updating payment status' });
//         }

//         if (result.affectedRows === 0) {
//           return res.status(404).json({ message: 'Payment not found' });
//         }

//         return res.status(200).json({ message: 'Payment status updated successfully' });
//       });

//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ message: 'Error updating payment status' });
//     }
//   }
// };

// module.exports = PaymentController;

const Razorpay = require('razorpay');
const { connection } = require('../../Config/db'); // DB connection

// Razorpay instance setup with test keys
const razorpay = new Razorpay({
  key_id: 'rzp_test_RMrRKSDMGVDe6x', // Replace with your Razorpay test Key ID
  key_secret: 'lOTANrhA5khByNmRlB61lx2w' // Replace with your Razorpay test Secret Key
});

const PaymentController = {
  // Create Payment Order
  createPaymentOrder: async (req, res) => {
    const { amount, currency = 'INR', paymentMethod, cid, order_id, email } = req.body;

    try {
      const options = {
        amount: amount * 100, // Razorpay accepts amount in paise
        currency,
        receipt: `order_rcptid_${order_id}`,
        payment_capture: 1
      };

      razorpay.orders.create(options, (err, order) => {
        if (err) {
          return res.status(500).json({ message: 'Error creating Razorpay order', error: err });
        }

        const query = `
          INSERT INTO tbl_payments (payment_id, cid, email, order_id, amount, currency, status, payment_method, created_at, updated_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
        `;
        connection.query(query, [order.id, cid, email, order_id, amount, currency, 'pending', paymentMethod], (err) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error saving payment details' });
          }

          res.status(201).json({
            message: 'Payment order created successfully!',
            orderId: order.id,
            amount,
            currency
          });
        });
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error processing payment order' });
    }
  },

  // Capture Payment
  capturePayment: async (req, res) => {
    const { payment_id, amount } = req.body;

    try {
      const amountToCapture = parseInt(amount * 100);
      razorpay.payments.capture(payment_id, amountToCapture, 'INR', (err, payment) => {
        if (err) {
          return res.status(400).json({ message: 'Error capturing payment', error: err });
        }

        const updateQuery = 'UPDATE tbl_payments SET status = ?, updated_at = NOW() WHERE payment_id = ?';
        connection.query(updateQuery, ['completed', payment_id], (err) => {
          if (err) {
            return res.status(500).json({ message: 'Error updating payment status' });
          }

          res.status(200).json({ message: 'Payment captured successfully!', paymentDetails: payment });
        });
      });
    } catch (error) {
      console.error('Error in capturePayment function:', error);
      return res.status(500).json({ message: 'Error capturing payment' });
    }
  },

  // Fetch Payment Details by payment_id
  getPaymentDetails: (req, res) => {
    const { payment_id } = req.params;
    const query = 'SELECT * FROM tbl_payments WHERE payment_id = ?';

    connection.query(query, [payment_id], (err, result) => {
      if (err || result.length === 0) {
        return res.status(404).json({ message: 'Payment not found or error fetching details' });
      }
      res.status(200).json(result[0]);
    });
  },

  // Update Payment Status
  updatePaymentStatus: (req, res) => {
    const { payment_id, status } = req.body;
    const query = 'UPDATE tbl_payments SET status = ?, updated_at = NOW() WHERE payment_id = ?';

    connection.query(query, [status, payment_id], (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error updating payment status' });
      }
      res.status(200).json({ message: 'Payment status updated successfully' });
    });
  }
};

module.exports = PaymentController;
