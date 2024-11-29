const db = require('../../Config/db');

const CustomerRegistration = {
    getAllCustomerRegistration: (callback) => {
        db.query('SELECT * FROM tbl_customer_registration', callback);
    },
    getCustomerRegistrationById: (cid, callback) => {
        db.query('SELECT * FROM tbl_customer_registration WHERE cid = ?', [cid], callback);
    },
    getCustomerRegistrationByEmail: (email, callback) => {
        db.query('SELECT * FROM tbl_customer_registration WHERE email = ?', [email], callback);
    },
    createCustomerRegistration: (registrationData, callback) => {
        const { cid, email, customer_name, age, contact_no, gender, status, password, accountcreationdate } = registrationData;
        db.query(
            'INSERT INTO tbl_customer_registration (cid, email, customer_name, age, contact_no, gender, status, password, accountcreationdate) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [cid, email, customer_name, age, contact_no, gender, status, password, accountcreationdate],
            callback
        );
    },
    updateCustomerRegistration: (cid, registrationData, callback) => {
        const { email, customer_name, age, contact_no, gender, status, password, accountcreationdate } = registrationData;
        db.query(
            'UPDATE tbl_customer_registration SET email = ?, customer_name = ?, age = ?, contact_no = ?, gender = ?, status = ?, password = ?, accountcreationdate = ? WHERE cid = ?',
            [email, customer_name, age, contact_no, gender, status, password, accountcreationdate, cid],
            callback
        );
    },
    deleteCustomerRegistration: (cid, callback) => {
        db.query('DELETE FROM tbl_customer_registration WHERE cid = ?', [cid], callback);
    }
};

module.exports = CustomerRegistration;
