const jwt = require("jsonwebtoken");
const { Survey } = require("../models/surveys");
const Employee = require("../models/employee");
const Admin = require("../models/auth");
const Question = require("../models/Questions")
const { transport } = require("../middleware/nodemailer");
const crypto = require("crypto");
const Answer = require("../models/answers");
const SurveySend = require("../models/sentSurveys");
const surveysData = require("../data/surveysData");
const { default: mongoose } = require("mongoose");
let SibApiV3Sdk = require('sib-api-v3-sdk');
const asyncHandler = require('express-async-handler');

let defaultClient = SibApiV3Sdk.ApiClient.instance;
let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDGRID_API_KEY;



// create servey
exports.createQuestion = async (req, res) => {
  try {
    const { question, rating } = req.body;
    const { surveyId } = req.params; // assuming 'surveyId' is the parameter name

    // Map the rating to the corresponding answer category
    let answer;
    switch (rating) {
      case 1:
      case 2:
        answer = "Very Poor";
        break;
      case 3:
        answer = "Average";
        break;
      case 4:
        answer = "Good";
        break;
      case 5:
        answer = "Excellent";
        break;
      default:
        answer = "Unknown";
    }

    // Create new question with the rating mapped to the answer
    const newQuestion = new Question({
      question,
      rating,
      answer, // Include the answer directly in the question
      survey: surveyId,
    });

    // Save the question
    await newQuestion.save();

    // Find the survey by ID
    const survey = await Survey.findById(surveyId);

    // Push the ID of the new question into the questions array of the survey
    survey.questions.push(newQuestion._id);

    // Save the updated survey
    await survey.save();

    res.status(201).json({
      message: "Question created and added to the survey successfully",
      question: newQuestion,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// getQuestion By Servey
exports.getQuestionsBySurvey = async (req, res) => {
  try {
    const { surveyId } = req.params; // assuming 'surveyId' is the parameter name

    const questions = await Question.find({ survey: surveyId })

    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// get All serveys 
exports.getSurveysByAdminId = async (req, res) => {
  try {
    const { adminId } = req.params;
    console.log(adminId)
    const serveys = await Survey.find({ admin: adminId })
    res.status(200).json(serveys);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};

// getSurveyById 
exports.getSurveyById = async (req, res) => {
  try {
    const { surveyId } = req.params;

    console.log(surveyId)

    const servey = await Survey.findById({ _id: surveyId })
    res.status(200).json(servey);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Create Survey new Controller
exports.createSurvey = async (req, res) => {
  console.log("Hello World")
  try {
    const { adminId } = req.params;
    const { surveyData, questions } = req.body;
    const { Survey_title, Survey_description, Survey_category } = surveyData;



    // Validate the data
    if (!adminId || !surveyData || !questions) {
      return res.status(400).json({ error: "Invalid request" });
    }

    // Find admin
    const admin = await Admin.findById(adminId);
    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }

    // Create questions in the database
    const createdQuestions = await Question.create(questions);
    if (!createdQuestions) {
      return res.status(500).json({ error: "Failed to create questions" });
    }

    // Retrieve the IDs of the newly created questions
    const questionIds = createdQuestions.map(question => question._id);

    // Create the survey
    const survey = new Survey({
      admin: adminId,
      name: Survey_title,
      description: Survey_description,
      category: Survey_category,
      questions: questionIds,
    });

    const createdSurvey = await survey.save();
    if (!createdSurvey) {
      return res.status(500).json({ error: "Failed to create survey" });
    }

    for (const question of createdQuestions) {
      question.survey = survey._id
      await question.save()
    }

    admin.survey.push(createdSurvey._id);
    await admin.save();

    // Generate a unique survey token using JWT
    const surveyToken = jwt.sign({ adminId, surveyId: createdSurvey._id }, process.env.JWT_SECRET);

    res.status(201).json({ success: true, message: "Survey Created Successfully", survey: createdSurvey, token: surveyToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};
// creating default survey 

exports.createDefaultSurvey = async (req, res) => {
  let defaultSurveyCreated = false;
  try {
    if (defaultSurveyCreated) {
      return res.status(200).json({ message: "Default survey already created" });
    }

    for (const survey of surveysData) {
      const newSurvey = new Survey({
        name: survey.name,
        description: survey.description,
        category: survey.category,
        surveyType: "default"
      });
      await newSurvey.save();

      for (const question of survey.questions) {
        console.log(question)
        const newQuestion = new Question({
          Question_category: "default",
          Type: question.Type,
          Lower_label: question.Lower_label,
          Upper_label: question.Upper_label,
          Question_title: question.Question_title,
        });
        newQuestion.survey = newSurvey._id;
        await newQuestion.save();

        newSurvey.questions.push(newQuestion._id);
        await newSurvey.save();
      }
    }

    defaultSurveyCreated = true;

    const surveys = await Survey.find({ surveyType: "default" });
    res.status(201).json(surveys);
  } catch (error) {
    res.status(500).json({ error: error.message, mesg: "some issue" });
  }
};

// fetching default surveys 
exports.fetchingDefaultSurveys = async (req, res) => {
  const surveys = await Survey.find({ surveyType: "default" })
  if (!surveys) {
    res.status(404).json({ mesg: "Surveys not created yet" })
  }

  res.status(200).json({ success: true, surveys })
}
// Transporter Controller
// exports.sendSurveyInvitations = async (req, res) => {
//   try {
//     const { adminId, token } = req.params;
//     let { employeeEmails, nickName, surveyId } = req.body;

//     employeeEmails = employeeEmails.split(",").map(email => email.trim());

//     const survey = await Survey.findById(surveyId);
//     if (!survey) {
//       return res.status(404).json({ error: `Survey not found with id ${surveyId} ` });
//     }

//     const surveySend = new SurveySend({
//       surveyNickname: nickName,
//       surveyId,
//       adminId,
//       sent_to: employeeEmails.length,
//     });
//     await surveySend.save();

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     const uniqueTokens = employeeEmails.map(() => crypto.randomBytes(20).toString("hex"));

//     const employees = await Employee.find({ email: { $in: employeeEmails } });
//     if (employees.length !== employeeEmails.length) {
//       return res.status(404).json({ error: "Some employees not found" });
//     }

//     const surveyUrls = uniqueTokens.map((uniqueToken, index) => {
//       const employeeId = employees[index]._id;
//       return ${process.env.FRONTEND_URL}/surveys/${adminId}/${surveyId}/${surveySend._id}/${employeeId}/${uniqueToken};
//     });

//     for (let i = 0; i < employees.length; i++) {
//       const employee = employees[i];
//       const surveyUrl = surveyUrls[i];

//       const mailOptions = {
//         from: process.env.EMAIL_HOST,
//         to: employee.email,
//         subject: "Survey Invitation",
//         html: `
//           You have been invited to participate in a survey. Please click the link below to access the survey:
//           <br/> ${nickName} <br>
//           <a href="${surveyUrl}" style="text-decoration: none; background-color: #007bff; color: #ffffff; padding: 10px 20px; border-radius: 5px; display: inline-block;">
//             Take Survey
//           </a>
//         `,
//       };

//       await transport.sendMail(mailOptions);
//     }

//     res.status(200).json({ message: "Survey invitations sent successfully", totalMails: employeeEmails.length });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server Error" });
//   }
// };




exports.sendSurveyInvitations = asyncHandler(async (req, res) => {
  try {
    const { adminId, token } = req.params;
    let { employeeEmails, nickName, surveyId } = req.body;

    employeeEmails = employeeEmails.split(",").map(email => email.trim());

    const survey = await Survey.findById(surveyId);
    if (!survey) {
      return res.status(404).json({ error: `Survey not found with id ${surveyId} ` });
    }

    const surveySend = new SurveySend({
      surveyNickname: nickName,
      surveyId,
      adminId,
      sent_to: employeeEmails.length,
    });
    await surveySend.save();

    const decoded = jwt.verify(token,process.env.JWT_SECRET);

    const uniqueTokens = employeeEmails.map(() => crypto.randomBytes(20).toString("hex"));

    const employees = await Employee.find({ email: { $in: employeeEmails } });
    if (employees.length !== employeeEmails.length) {
      return res.status(404).json({ error: "Some employees not found" });
    }

    const surveyUrls = uniqueTokens.map((uniqueToken, index) => {
      const employeeId = employees[index]._id;
      return `${process.env.FRONTEND_URL}/surveys/${adminId}/${surveyId}/${surveySend._id}/${employeeId}/${uniqueToken}`;
    });

    let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    for (let i = 0; i < employees.length; i++) {
      const employee = employees[i];
      const surveyUrl = surveyUrls[i];

      let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

      sendSmtpEmail.sender = { email: process.env.EMAIL_HOST, name: 'BackstageRate' }; // Replace 'Your Name' with your sender name
      sendSmtpEmail.to = [{ email: employee.email }];
      sendSmtpEmail.subject = "Survey Invitation";
      sendSmtpEmail.htmlContent = `
        <p>You have been invited to participate in a survey. Please click the link below to access the survey:</p>
        <p>${nickName}</p>
        <a href="${surveyUrl}" style="text-decoration: none; background-color: #007bff; color: #ffffff; padding: 10px 20px; border-radius: 5px; display: inline-block;">
          Take Survey
        </a>
      `;

      try {
        await apiInstance.sendTransacEmail(sendSmtpEmail);
      } catch (emailError) {
        console.error('Failed to send survey invitation email:', emailError.response ? emailError.response.body : emailError);
        return res.status(500).json({ error: "Failed to send some survey invitation emails", details: emailError.message });
      }
    }

    res.status(200).json({ message: "Survey invitations sent successfully", totalMails: employeeEmails.length });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
});

// submit servey
exports.submitSurvey = async (req, res) => {
  try {
    // Extract survey token from request
    const { token } = req.body;

    // Decode the token to get the adminId
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const { adminId } = decodedToken;

    // Find the survey associated with the token
    const survey = await Survey.findOne({ token });

    // If survey is not found, return error
    if (!survey) {
      return res.status(404).json({ error: "Survey not found" });
    }

    // Associate the survey responses with the admin who created the survey
    survey.admin = adminId;
    await survey.save();

    // Handle survey submission (e.g., save survey responses)

    res.status(200).json({ message: "Survey submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
}

exports.submitAnswer = async (req, res) => {
  try {
    const { surveyId } = req.params;
    const { questionId, rating, token, employeeId, inputAns, textAreaAns, surveySendId } = req.body;

    const surveySend = await SurveySend.findById(surveySendId);
    if (!surveySend) {
      throw new Error("SurveySend not found");
    }

    if (surveySend.usedTokens.includes(token)) {
      return res.status(400).json({ success: false, message: "Token has already been used" });
    }

    const question = await Question.findById(questionId);
    if (!question) {
      throw new Error("Question not found");
    }

    const newAnswer = new Answer({
      employee: employeeId,
      rating,
      question: questionId,
      surveyId,
      inputAnswer: inputAns,
      textAreaAnswer: textAreaAns,
      sentSurvey: surveySend._id
    });
    await newAnswer.save();

    surveySend.answers.push(newAnswer._id)
    await surveySend.save()

    const survey = await Survey.findById(surveyId)
    if (!survey) {
      res.status(404).json({ success: false, mesg: "Survey not Found" })
    }

    if (questionId == survey.questions[survey.questions.length - 1]) {
      surveySend.usedTokens.push(token);
      await surveySend.save();
    }

    res.status(200).json({ success: true, message: "Answer submitted successfully" });
  } catch (error) {
    console.error("Error submitting answer:", error);
    res.status(500).json({ success: false, message: "Failed to submit answer" });
  }
};
exports.getAsnwerDetails = async (req, res) => {
  const { surveyId } = req.params;

  try {
    // Fetch all answers for the given surveyId
    const answers = await Answer.find({ surveyId }).populate('question');
    if (!answers.length) {
      return res.status(404).json({ message: "No answers found for this survey." });
    }


    const employeeIds = answers.map((answer) => answer.employee);
    const employees = await Employee.find({ _id: { $in: employeeIds } });

    const survey = await SurveySend.findById(surveyId);
    if (!survey) {
      res.status(404).json({ message: "Survey Not Found" });
    }

    const questions = await Question.find({ _id: { $in: answers.map((ans) => ans.question) } });

    const response = [
      {
        employees: employees.map((employee) => ({
          id: employee._id,
          name: employee.firstName,
          email: employee.email,
        }))
      },
      { surveyName: survey.name, },
      {
        answer: answers.map((ans) => {
          const question = questions.find((q) => q._id.toString() === ans.question.toString());
          return {
            answer: ans.answer,
            question: question,
          }
        })
      }
    ];

    res.status(200).json({
      surveyName: survey.name,
      averageRatings,
    });
  } catch (error) {
    console.error('Error fetching survey details:', error);
    res.status(500).json({ error: "Server error" });
  }
};
exports.getSendedSurvey = async (req, res) => {
  const { adminId } = req.params

  const surveys = await SurveySend.find({ adminId: adminId })
  if (!surveys) {
    res.status(404).json({
      success: false, mesg: "Survey Not Found"
    })
  }

  res.status(200).json({
    mesg: "Admin Surveys", success: true, surveys
  })
}