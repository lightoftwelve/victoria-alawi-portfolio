// Changed from express server to serverless functions to work with Netlify

/* eslint-disable no-undef */
// require("dotenv").config();
// const express = require("express");
// const apiRoutes = require("./controllers");
// const path = require("path");
// const cors = require("cors");
// const AWS = require("aws-sdk");

// AWS Config
// AWS.config.update({
//   accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
//   region: process.env.MY_AWS_REGION,
// });

// const PORT = process.env.PORT || 3001;
// const app = express();

// Middleware to parse form data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// CORS middleware
// const whitelist = ["http://localhost:3000", "http://localhost:3001"];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };
// app.use(cors(corsOptions));

// Routes
// app.use("/api", apiRoutes);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/dist/index.html"));
//   });
// }

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
