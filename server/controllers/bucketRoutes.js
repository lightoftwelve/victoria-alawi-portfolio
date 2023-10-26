const router = require("express").Router();
const AWS = require("aws-sdk");

// Initialize the S3 client
const s3 = new AWS.S3();

router.get("/images/:imageName", async (req, res) => {
  try {
    // Extract the image name from the request params
    const imageName = req.params.imageName;

    // Construct the S3 key based on naming convention
    const s3Key = `${imageName}`;

    console.log("Fetching image from S3 with key:", s3Key);

    // Specifing S3 bucket and S3 key
    const params = {
      Bucket: "victoria-alawi-portfolio",
      Key: s3Key,
    };

    // Retrieve the image from S3
    const data = await s3.getObject(params).promise();

    console.log("Image fetched successfully");

    // Set response headers
    res.setHeader("Content-Type", data.ContentType);

    // Send the image data as the response
    res.send(data.Body);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving the image");
  }
});

module.exports = router;
