const StudentService = require("../services/student.service");

class StudentController {
  static async addNewStudent(req, res) {
    try {
      const student = await StudentService.addNewStudent(req.body);
      console.log("rq.body", req.body);

      console.log(`data::`, student);
      return res.status(student.code).json(student);
    } catch (error) {
      res
        .status(500)
        .json({ code: 500, message: error.message || "Internal server error" });
    }
  }
}

module.exports = StudentController;
