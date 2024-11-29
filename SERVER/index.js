const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const session = require("express-session");
const bodyParser = require("body-parser");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const CustomerRoutes = require('./Routes/CustomerRoutes/CustomerRoutes');
const CloudeneryRoute = require('./Routes/CloudRoutes/CloudRoutes');
const errorHandler = require("./Middlewares/ErrorHandler");
const MongoStore = require('connect-mongo');
const AddtocardRoutes = require('./Routes/AddtocardRoutes/addtocardRoutes');
const OrderRoutes = require('./Routes/OrderRoutes/OrderRoutes');
const paymentRoutes = require('./Routes/paymentRoutes/paymentRoutes');

dotenv.config();

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const app = express();

// Logging with Morgan
app.use(morgan("dev"));

// CORS configuration
app.use(
  cors({
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"], // PATCH added here
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(cookieParser());


app.use(
  session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: 'mongodb://localhost:27017/your_db_name', // Replace with your MongoDB connection string
      collectionName: 'sessions',
    }),
    cookie: { secure: false, maxAge: 60000 }, // Set `secure: true` if using HTTPS
  })
);

// Parse JSON, URL-encoded data, and body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Session configuration


// Cookie parser



// Routes
app.use("/api", require("./Routes/Server"));
app.use("/api", CustomerRoutes);
app.use("/api", CloudeneryRoute);
app.use("/card", AddtocardRoutes );
app.use("/api" ,OrderRoutes);
app.use ("/payment",  paymentRoutes  )
// Error handler middleware
app.use(errorHandler);

// Server setup
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 📡🌎`);
});

// Graceful shutdown
const shutdown = () => {
  console.log("Shutting down server...");
  server.close(() => {
    console.log("Server closed.");
    process.exit(0);
  });
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
