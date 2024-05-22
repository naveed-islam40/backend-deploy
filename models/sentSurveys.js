const mongoose = require("mongoose");

const SurveySendSchema = new mongoose.Schema({
    surveyNickname: {
        type: String,
    },
    surveyId: {
        type: String,
    },
    sendDate: {
        type: Date,
        default: Date.now,
    },
    adminId: {
        type: String,
    },
    sent_to: {
        type: Number,
    },
    usedTokens: [{
        type: String
    }],
    answers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answer"
    }]
});

const SurveySend = mongoose.model("SentSurvey", SurveySendSchema);

module.exports = SurveySend