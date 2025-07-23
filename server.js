const express = require("express");
const connectDB = require('./connectDB');
require("dotenv").config();

const app = express();
connectDB(); // Call the DB connection function

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("SecureShift API is running.");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
