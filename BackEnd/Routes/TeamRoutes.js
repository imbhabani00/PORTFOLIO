const express = require("express");
const router = express.Router();
const Team = require("../models/Team"); // Import the Team model

// ✅ GET: Fetch All Team Members
router.get("/", async (req, res) => {
  try {
    const teamMembers = await Team.find().sort({ _id: -1 });
    res.status(200).json(teamMembers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch team members" });
  }
});

// ✅ POST: Add a New Team Member (Admin Use)
router.post("/", async (req, res) => {
  try {
    const { name, role, description, imageUrl } = req.body;
    if (!name || !role || !description || !imageUrl) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newTeamMember = new Team({ name, role, description, imageUrl });
    await newTeamMember.save();

    res.status(201).json({ message: "Team member added successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add team member" });
  }
});

// ✅ DELETE: Remove a Team Member (Admin Use)
router.delete("/:id", async (req, res) => {
  try {
    const teamMember = await Team.findByIdAndDelete(req.params.id);
    if (!teamMember) {
      return res.status(404).json({ error: "Team member not found" });
    }
    res.status(200).json({ message: "Team member deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete team member" });
  }
});

module.exports = router;
