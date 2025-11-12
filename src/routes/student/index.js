const express = require("express");
const router = express.Router();
const StudentController = require("../../controllers/student.controller");

router.post("/students", StudentController.addNewStudent);

module.exports = router;
