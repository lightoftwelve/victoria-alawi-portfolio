const router = require("express").Router();
const bucketRoutes = require("./bucketRoutes");
const emailRoutes = require("./emailRoutes");

router.use("/photos", bucketRoutes);
router.use("/contact", emailRoutes);

router.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

module.exports = router;
