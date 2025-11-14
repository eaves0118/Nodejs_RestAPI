const StudentService = require("../services/student.service");

class StudentController {
  static async addNewStudent(req, res) {
    try {
      const { code, message, student } = await StudentService.addNewStudent(
        req.body
      );
      console.log("req.body:", req.body);
      console.log("student data:", student);

      return res.status(code).json({ message, student });
    } catch (error) {
      return res.status(500).json({
        message: error.message || "Internal server error",
      });
    }
  }

  static async getAllStudent(req, res) {
    try {
      const { code, message, students } = await StudentService.getAllStudent();
      console.log("students data:", students);

      return res.status(code).json({ message, students });
    } catch (error) {
      return res.status(500).json({
        message: error.message || "Internal server error",
      });
    }
  }

  static async getStudentById(req, res) {
    try {
      const { id } = req.params;
      const { code, message, student } = await StudentService.getStudentById(
        id
      );

      return res.status(code).json({ message, student });
    } catch (error) {
      return res.status(500).json({
        message: error.message || "Internal server error",
      });
    }
  }

  static async deleteStudent(req, res) {
    try {
      const { id } = req.params;
      const { code, message } = await StudentService.deleteStudent(id);

      return res.status(code).json({ message });
    } catch (error) {
      return res.status(500).json({
        message: error.message || "Internal server error",
      });
    }
  }
}

module.exports = StudentController;
