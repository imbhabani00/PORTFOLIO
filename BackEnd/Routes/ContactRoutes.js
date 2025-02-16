const express = require("express");
const router = express.Router();
const Contact = require("../Models/Contact");
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  const { name, mobile, email, message } = req.body;

  if (!name || !mobile || !email || !message) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  try {
    // Save to MongoDB
    const newMessage = new Contact({ name, mobile, email, message });
    await newMessage.save();

    // Send email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nMobile: ${mobile}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send message!" });
  }
});

module.exports = router;
