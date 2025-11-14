const express = require("express");
const router = express.Router();
const studentRoutes = require("./student/index");

router.use("/v1/api", studentRoutes);

module.exports = router;
