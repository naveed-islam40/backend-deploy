
const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Company name is required',
        trim: true,
    },
    siret: {
        type: String,
        required: [true, "SIRET is required"],
    },
    // registrationNumber: {
    //     type: String,
    //     required: 'Registration number is required',
    //     unique: true,
    //     trim: true,
    // },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: 'City is required',
        trim: true,
    },
    // state: {
    //     type: String,
    //     required: 'State is required',
    //     trim: true,
    // },
    postalCode: {
        type: String,
        required: 'Postal code is required',
        trim: true,
    },
    // country: {
    //     type: String,
    //     required: 'Country is required',
    //     trim: true,
    // },
    numOfEmployees: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    survey: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Survey"
    },
    Admin: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    }],
    Employee: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    }]

}, {
    timestamps: true,
});

const Company = mongoose.model("Company", CompanySchema);
module.exports = Company;