const AWS = require("aws-sdk");
require("dotenv").config({ path: "../../env" });

AWS.config.update({
  accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
  region: process.env.MY_AWS_REGION,
});

const s3 = new AWS.S3();

exports.handler = async (event, context) => {
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const imageName = event.path.split("/").pop();

  const s3Key = `${imageName}`;
  const params = {
    Bucket: "victoria-alawi-portfolio",
    Key: s3Key,
  };

  try {
    const data = await s3.getObject(params).promise();

    return {
      statusCode: 200,
      headers: { "Content-Type": data.ContentType },
      body: data.Body.toString("base64"),
      isBase64Encoded: true,
    };
  } catch (error) {
    console.error(error);
    if (error.code === "NoSuchKey") {
      return { statusCode: 404, body: "Image not found" };
    }
    return { statusCode: 500, body: "Error retrieving the image" };
  }
};
