require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

// Import Routes
const contactRoutes = require("./Routes/ContactRoutes");
const projectRoutes = require("./Routes/ProjectRoutes");
const teamRoutes = require("./Routes/TeamRoutes");

const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:5173/" })); // Allow frontend to access API
app.use(express.json()); // Parse JSON data
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data

// Connect to MongoDB
(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Failed:", err);
    process.exit(1); // Exit if DB connection fails
  }
})();

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/team", teamRoutes);

// Root Route
app.get("/", (req, res) => {
  res.send("🚀 Server is running!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
