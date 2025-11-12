const Student = require("../models/student.model");

class StudentService {
  static async addNewStudent(data) {
    try {
      const { studentId, name, email, age, major, score } = data;
      const existsStudent = await Student.findOne({ studentId });
      if (existsStudent)
        return { code: 409, message: "Student ID already registered" };

      const newStudent = await Student.create({
        studentId,
        name,
        email,
        age,
        major,
        score,
      });
      return {
        code: 201,
        student: newStudent,
        message: "create student success",
      };
    } catch (error) {
      return {
        code: 500,
        message: error.message || "Internal server error",
      };
    }
  }

  static async getStudentById(id) {
    try {
      const student = await Student.findOne({ id });
      if (!student) {
        return {
          code: 404,
          message: `Student with ${id} not found`,
        };
      }
      return {
        code: 200,
        student,
        message: "Student found",
      };
    } catch (error) {
      return {
        code: 500,
        message: error.message || "Internal server error",
      };
    }
  }

  static async getAllStudent() {
    try {
      const students = await Student.find();
      if (students.length === 0) {
        return { code: 404, message: "No students found" };
      }
      return {
        code: 200,
        students,
        message: "Students found",
      };
    } catch (error) {
      return {
        code: 500,
        message: error.message || "Internal server error",
      };
    }
  }

  static async updateStudent(data, id) {
    try {
      const { studentId, name, email, age, major, score } = data;
      const student = await Student.findById(id);
      if (!student) {
        return {
          code: 404,
          message: `Student with ID ${id} not found`,
        };
      }
      if (studentId !== student.studentId) {
        const existsStudentId = await Student.findOne({ studentId });
        if (existsStudentId) {
          return {
            code: 409,
            message: "Student ID already registered",
          };
        }
      }

      if (email !== student.email) {
        const existsEmail = await Student.findOne({ email });
        if (existsEmail) {
          return {
            code: 409,
            message: "Email already registered",
          };
        }
      }

      student.studentId = studentId || student.studentId;
      student.name = name || student.name;
      student.email = email || student.email;
      student.age = age || student.age;
      student.major = major || student.major;
      student.score = score !== undefined ? score : student.score;

      const updatedStudent = await student.save();

      return {
        code: 200,
        student: updatedStudent,
        message: "Student updated successfully",
      };
    } catch (error) {
      return {
        code: 500,
        message: error.message || "Internal server error",
      };
    }
  }

  static async deleteStudent(id) {
    try {
      const student = await Student.findById(id);
      if (!student) {
        return {
          code: 404,
          message: `Student with ID ${id} not found`,
        };
      }

      await Student.findByIdAndDelete(id);

      return {
        code: 200,
        message: "Student deleted successfully",
      };
    } catch (error) {
      return {
        code: 500,
        message: error.message || "Internal server error",
      };
    }
  }
}

module.exports = StudentService;
