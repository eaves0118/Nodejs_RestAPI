// models/Student.js
const mongoose = require("mongoose");

// 1. Định nghĩa schema
const StudentSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      required: [true, "Student ID is required"],
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Email is invalid"],
    },
    age: {
      type: Number,
      min: [16, "Minimum age is 16"],
      max: [100, "Maximum age is 100"],
      required: true,
    },
    major: {
      type: String,
      required: true,
      trim: true,
    },
    score: {
      type: Number,
      min: [0, "Score must be at least 0"],
      max: [100, "Score cannot exceed 100"],
      default: 0, // mặc định là 0 nếu chưa nhập
    },
  },
  {
    timestamps: true, // createdAt, updatedAt tự động
  }
);

// 2. Tạo model
const Student = mongoose.model("Student", StudentSchema);

// 3. Export model
module.exports = Student;
