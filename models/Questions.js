const mongoose = require('mongoose');

// Define the schema for a question
const questionSchema = new mongoose.Schema({
    Question_order: {
        type: Number,
    },
    Question_category: {
        type: String,
    },
    Type: {
        type: String,
    },
    Lower_label: {
        type: String,
        default: ''
    },
    Upper_label: {
        type: String,
        default: ''
    },
    Question_title: {
        type: String,
    },
    survey: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Survey"
    }],
    answers: [{
        type: String
    }]
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;