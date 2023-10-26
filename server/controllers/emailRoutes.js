const router = require("express").Router();
const nodemailer = require("nodemailer");

// POST endpoint to handle form submissions
// /api/contact/send-email
router.post("/send-email", (req, res) => {
  // Extract form data
  const { name, email, message } = req.body;

  // Configuring email sending settings
  const transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
      user: process.env.USERNAME,
      pass: process.env.PASSWORD,
    },
  });

  // Email data
  const mailOptions = {
    from: email, // Sender's email address
    to: process.env.USERNAME, // Use the user's input email address
    subject: "Portfolio Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

module.exports = router;
