const express = require("express");
const router = express.Router();
const Project = require("../Models/Projects");

// ✅ Fetch all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

module.exports = router;
