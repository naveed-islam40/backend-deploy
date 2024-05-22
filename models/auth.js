// const mongoose = require("mongoose");

// const AdminSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     lastName: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     // username: {
//     //     type: String,
//     //     required: true,
//     //     trim: true,
//     //     minlength: [3, 'Username must be at least 3 characters'],
//     //     maxlength: [15, 'Username cannot exceed 15 characters'],
//     // },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true,
//         lowercase: true,
//         match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
//     },
//     password: {
//         type: String,
//         required: true,
//         minlength: [8, 'Password must be at least 8 characters'],
//         maxlength: [100, 'Password cannot exceed 100 characters'],
//         // // validate: {
//         // //   validator: function(value) {
//         // //     // Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character
//         // //     return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[^\s]).{8,100}$/.test(value);
//         // //   },
//         //   message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
//         // },
//     },
//     userType: {
//         type: String,
//         // enum: ['admin'],
//         default: 'admin',
//     },
//     image: {
//         type: String,
//     },
//     Employee: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Employee'
//     }],
//     companies: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Company'
//     }]
// },
//     {
//         timestamps: true,
//     });

// const Admin = mongoose.model("Admin", AdminSchema);
// module.exports = Admin;

const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    position: {
        type: String,
    },
    phone: {
        type: String,
    },
    howDidYouKnow: {
        type: String,
    },
    userType: {
        type: String,
        // enum: ['admin'],
        default: 'admin',
    },
    image: {
        type: String,
    },
    Employee: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    }],
    companies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    }],
    survey: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Survey"
    }]
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;