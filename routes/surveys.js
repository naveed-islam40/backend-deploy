// routes/surveyRoutes.js
const express = require('express');
const { createSurvey, createQuestion, getQuestionsBySurvey, submitSurvey, getSurveysByAdminId, sendSurveyInvitations, submitAnswer, getSurveyById, getAsnwerDetails, getSendedSurvey, createDefaultSurvey, fetchingDefaultSurveys } = require('../controllers/Survey');
const surveyRouter = express.Router();

// router.get('/', surveyController.getAllSurveys);
// router.get('/:id', surveyController.getSurveyById);
// router.post('/', surveyController.createSurvey);
surveyRouter.post('/survey/create/:adminId', createSurvey);
surveyRouter.post('/surveys/:surveyId/questions', createQuestion);
surveyRouter.get('/questions/:surveyId', getQuestionsBySurvey);
surveyRouter.get('/surveybyid/:surveyId', getSurveyById);
surveyRouter.post('/submit', submitSurvey);
surveyRouter.get('/survey/:adminId', getSurveysByAdminId);
surveyRouter.post('/survey/surveyinvitations/:adminId/:token', sendSurveyInvitations);
surveyRouter.post('/survey/saveanswer/:surveyId', submitAnswer);
surveyRouter.post('/survey/answerdetails/:surveyId', getAsnwerDetails);
surveyRouter.get('/survey/sended/:adminId', getSendedSurvey)
surveyRouter.post('/survey/default', createDefaultSurvey)
surveyRouter.get("/surveys/default/all", fetchingDefaultSurveys)




// router.put('/:id', surveyController.updateSurvey);
// router.delete('/:id', surveyController.deleteSurvey);

module.exports = surveyRouter;