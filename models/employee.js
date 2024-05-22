const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  position: {
    type: String,
    trim: true,
  },
  department: {
    type: String,
    trim: true,
  },
  hireDate: {
    type: Date,
    default: Date.now,
  },
  dob: {
    type: Date,
    trim: true
  },
  gender: {
    type: String,
    trim: true
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company"
  },
  fileUploads: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FileUpload'
  },
  survey: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Survey"
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
  // Other employee details can be added here
}, {
  timestamps: true,
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;