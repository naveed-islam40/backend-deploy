const { v4: uuidv4 } = require('uuid');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const { transport } = require("../middleware/nodemailer");
// const Staff = require("../Models/Staff");
const Admin = require('../models/auth.js');
const File = require('../models/profilePic');
const Company = require('../models/Company');
const Employee = require('../models/employee');
let SibApiV3Sdk = require('sib-api-v3-sdk');



exports.registerStepOne = asyncHandler(async (req, res) => {
    const { email, password, confirmPassword } = req.body;

    try {
        // Check if the email already exists
        const adminExists = await Admin.findOne({ email });
        if (adminExists) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new admin with hashed password
        const admin = new Admin({ email, password: hashedPassword });
        // const savedAdmin = await admin.save();
        const savedAdmin = await admin.save();
        //         // Generate JWT token for the newly created admin
        const token = jwt.sign(
            { email: savedAdmin.email, id: savedAdmin._id, userType: savedAdmin.userType },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        return res.status(201).json({
            message: "Admin registration step one successful",
            admin: savedAdmin._id,
            token: token
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to register admin", error: error.message });
    }
});
exports.registerStepTwo = asyncHandler(async (req, res) => {
    const { firstName, lastName, position, phone, howDidYouKnow } = req.body;
    const { adminId } = req.params; // Assuming the adminId is passed as a parameter

    try {
        // Find the admin by ID
        const admin = await Admin.findById(adminId);
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        // Update admin with additional information
        admin.firstName = firstName;
        admin.lastName = lastName;
        admin.position = position;
        admin.phone = phone;
        admin.howDidYouKnow = howDidYouKnow;

        const savedAdmin = await admin.save();

        return res.status(200).json({
            message: "Admin registration step two successful",
            admin: savedAdmin,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to register admin", error: error.message });
    }
});

exports.getAdminById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const admin = await Admin.findById(id);
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        return res.status(200).json({ admin });
    } catch (error) {
        return res.status(500).json({ message: "Failed to fetch admin", error: error.message });
    }
});
exports.updateAdmin = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    console.log(id);
    console.log(updates);
    try {
        const updatedAdmin = await Admin.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedAdmin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        return res.status(200).json({ message: "Admin updated successfully", admin: updatedAdmin });
    } catch (error) {
        return res.status(500).json({ message: "Failed to update admin", error: error.message });
    }
});
exports.deleteAdmin = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const deletedAdmin = await Admin.findByIdAndDelete(id);
        if (!deletedAdmin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        return res.status(200).json({ message: "Admin deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Failed to delete admin", error: error.message });
    }
});
exports.getAdmins = asyncHandler(async (req, res) => {
    try {
        const admins = await Admin.find();
        return res.status(200).json({ message: "Admins list", admins });
    } catch (error) {
        return res.status(500).json({ message: "Failed to fetch admins", error: error.message });
    }
});
// exports.resetPasswordEmail = asyncHandler(async (req, res) => {
//     const { email } = req.body;

//     try {
//         const user = await Admin.findOne({ email });
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "20min" });
//         const resetLink = `${process.env.FRONTEND_URL}/admin/reset-new-password/${token}`;
//         const message = `Change your password using the provided link. This link will expire in 20 minutes: ${resetLink}`;

//         const mailOptions = {
//             from: process.env.EMAIL_HOST,
//             to: user.email,
//             subject: "Reset Password",
//             text: message
//         };

//         transport.sendMail(mailOptions, function (error, info) {
//             if (error) {
//                 console.error(error);
//                 return res.status(500).json({ message: "Failed to send reset password email", error: error.message });
//             } else {
//                 console.log("Reset password email sent:", info.response);
//                 return res.status(200).json({ message: "Reset password email sent successfully" });
//             }
//         });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: "Error resetting password", error: error.message });
//     }
// });
let defaultClient = SibApiV3Sdk.ApiClient.instance;
let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDGRID_API_KEY;

exports.resetPasswordEmail = asyncHandler(async (req, res) => {
    const { email } = req.body;

    try {
        const user = await Admin.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "20min" });
        const resetLink = `${process.env.FRONTEND_URL}/admin/reset-new-password/${token}`;
        const message = `Change your password using the provided link. This link will expire in 20 minutes: <a href="${resetLink}">Reset Password</a>`;

        let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
        let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

        sendSmtpEmail.sender = { email: process.env.EMAIL_HOST, name: 'BackstageRate (Enquête)' }; // Replace 'Your Name' with your sender name
        sendSmtpEmail.to = [{ email: user.email }];
        sendSmtpEmail.subject = "Reset Password";
        sendSmtpEmail.htmlContent = message;

        try {
            let data = await apiInstance.sendTransacEmail(sendSmtpEmail);
            console.log('Reset password email sent: ' + JSON.stringify(data));
            return res.status(200).json({ message: "Reset password email sent successfully" });
        } catch (emailError) {
            console.error('Failed to send reset password email:', emailError);
            return res.status(500).json({ message: "Failed to send reset password email", error: emailError.message });
        }

    } catch (error) {
        console.error("Error resetting password:", error);
        return res.status(500).json({ message: "Error resetting password", error: error.message });
    }
});
exports.resetPasswordToken = asyncHandler(async (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;

    console.log(newPassword);

    try {


        const decoded = jwt.verify(token, JWT_SECRET);
        const userId = decoded.userId;



        const user = await Admin.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }


        const hashPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashPassword;
        await user.save();

        console.log("user reach");
        return res.status(200).json({ message: "Password has been changed successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to reset password", error: error.message });
    }
});
exports.changePassword = asyncHandler(async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await Admin.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const { oldPassword, newPassword, confirmPassword } = req.body;
        if (!oldPassword || !newPassword || !confirmPassword) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const verifyPassword = await bcrypt.compare(oldPassword, user.password);
        if (!verifyPassword) {
            return res.status(401).json({ message: "Incorrect old password" });
        }

        if (newPassword !== confirmPassword) {
            return res.status(400).json({ message: "Passwords don't match" });
        }

        const newHashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = newHashedPassword;
        await user.save();

        return res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to change password", error: error.message });
    }
});
exports.getImage = asyncHandler(async (req, res) => {
    const { id } = req.params;

    console.log("Image Id", id);
    try {
        const file = await File.findById(id);
        if (!file) {
            return res.status(404).json({ message: "No image available" });
        }

        res.setHeader("Content-Type", "image/jpeg");
        res.send(file.buffer);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to get user image", error: error.message });
    }
});
