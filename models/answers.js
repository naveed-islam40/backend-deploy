const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
    rating: { type: String },
    question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
    surveyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Survey' },
    inputAnswer: { type: String },
    textAreaAnswer: { type: String },
    sentSurvey: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SentSurvey"
    }
});

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer