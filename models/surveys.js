const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question"
  }],
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin"
  },
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee"
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company"
  },
  description: {
    type: String
  },
  category: {
    type: String
  },
  surveyType: {
    type: String,
    default: "custom"
  }
});

const Survey = mongoose.model("Survey", surveySchema);

module.exports = { Survey };