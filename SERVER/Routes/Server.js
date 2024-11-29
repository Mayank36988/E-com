const express = require("express");
const router = express.Router();

// Admin Routes
const AdminRoutes = require("./AdminRoutes/adminRoutes");
const AdminUserProfileRoutes = require("./AdminRoutes/AdminUserProfilesRoutes");

// Category/Subcategory Routes
const catSubcatRoutes = require("./CategorySubcategoryRoutes/catSubcatRoutes");

// Retailer Routes
const retailerProductRoutes = require("./RetailProRegRoutes/RetailProductRoutes");
const retailerProductDescriptionRoutes = require("./RetailProRegRoutes/RetailerProductDescriptionRoutes");
const retailerRegistrationRoutes = require("./RetailProRegRoutes/RetailerRegistrationRoutes");

// Customer Routes
// const customerRoutes = require('../Routes/CustomerRoutes/CustomerRoutes');

// Use the routes
// router.use('/customer', customerRoutes); // Customer registration routes
router.use("/", AdminRoutes); // Admin routes
router.use("/profiles", AdminUserProfileRoutes); // Admin user profiles routes
router.use("/", catSubcatRoutes); // Category and subcategory routes
router.use("/products", retailerProductRoutes); // Retailer product routes
router.use("/descriptions", retailerProductDescriptionRoutes); // Retailer product description routes
router.use("/retailers", retailerRegistrationRoutes); // Retailer registration routes

module.exports = router;
