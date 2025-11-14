const express = require("express");
const router = express.Router();
const StudentController = require("../../controllers/student.controller");

router.post("/students", StudentController.addNewStudent);
router.get("/students", StudentController.getAllStudent);
router.get("/students/:id", StudentController.getStudentById);
router.delete("/student/:id", StudentController.deleteStudent);

module.exports = router;
