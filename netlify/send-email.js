const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { name, email, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
      user: process.env.USERNAME,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.USERNAME,
    subject: "Portfolio Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { statusCode: 200, body: "Email sent successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { statusCode: 500, body: "Error sending email" };
  }
};
