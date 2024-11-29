const { connection } = require('../../Config/db');  // DB connection

const OrderController = {
    // Create Order
    createOrder: async (req, res) => {
        const { orderId, cid, totalAmount, status, paymentId } = req.body;

        // Log to check the received data
        console.log(req.body);

        // Validate if all fields are provided
        if (!orderId || !cid || !totalAmount || !status || !paymentId) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Validate Payment ID exists in tbl_payments
        const paymentQuery = 'SELECT * FROM tbl_payments WHERE payment_id = ?';
        connection.query(paymentQuery, [paymentId], (err, paymentRows) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Error validating payment ID' });
            }
            if (paymentRows.length === 0) {
                return res.status(400).json({ message: 'Invalid payment ID' });
            }

            // Validate Customer ID exists in tbl_customer_registration
            const customerQuery = 'SELECT * FROM tbl_customer_registration WHERE cid = ?';
            connection.query(customerQuery, [cid], (err, customerRows) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ message: 'Error validating customer ID' });
                }
                if (customerRows.length === 0) {
                    return res.status(400).json({ message: 'Invalid customer ID' });
                }

                // Insert the order into tbl_customer_order
                const query = `
                    INSERT INTO tbl_customer_order (order_id, cid, order_date, total_amount, status, payment_id)
                    VALUES (?, ?, CURRENT_TIMESTAMP, ?, ?, ?)
                `;
                connection.query(query, [orderId, cid, totalAmount, status, paymentId], (err, result) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).json({ message: 'Error creating order' });
                    }
                    return res.status(201).json({ message: 'Order created successfully!', orderId });
                });
            });
        });
    },

    // Get Order by ID
    getOrderById: async (req, res) => {
        const { orderId } = req.params;

        try {
            const query = 'SELECT * FROM tbl_customer_order WHERE order_id = ?';
            connection.query(query, [orderId], (err, rows) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ message: 'Error fetching order' });
                }

                if (rows.length === 0) {
                    return res.status(404).json({ message: 'Order not found' });
                }

                return res.status(200).json(rows[0]);
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error fetching order' });
        }
    },

    // Update Order Status
    updateOrderStatus: async (req, res) => {
        const { orderId } = req.params;
        const { status } = req.body;

        if (!status) {
            return res.status(400).json({ message: 'Status is required' });
        }

        try {
            const query = 'UPDATE tbl_customer_order SET status = ? WHERE order_id = ?';
            connection.query(query, [status, orderId], (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ message: 'Error updating order status' });
                }

                if (result.affectedRows === 0) {
                    return res.status(404).json({ message: 'Order not found' });
                }

                return res.status(200).json({ message: 'Order status updated successfully' });
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error updating order status' });
        }
    },

    // Delete Order
    deleteOrder: async (req, res) => {
        const { orderId } = req.params;

        try {
            const query = 'DELETE FROM tbl_customer_order WHERE order_id = ?';
            connection.query(query, [orderId], (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ message: 'Error deleting order' });
                }

                if (result.affectedRows === 0) {
                    return res.status(404).json({ message: 'Order not found' });
                }

                return res.status(200).json({ message: 'Order deleted successfully' });
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error deleting order' });
        }
    },

    // Get Orders by Customer ID
    getOrdersByCustomerId: async (req, res) => {
        const { cid } = req.params;

        try {
            const query = 'SELECT * FROM tbl_customer_order WHERE cid = ?';
            connection.query(query, [cid], (err, rows) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ message: 'Error fetching orders by customer' });
                }

                if (rows.length === 0) {
                    return res.status(404).json({ message: 'No orders found for this customer' });
                }

                return res.status(200).json(rows);
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error fetching orders by customer' });
        }
    }
};

module.exports = OrderController;
