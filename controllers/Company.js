const asyncHandler = require('express-async-handler');
const Company = require('../models/Company');
const Admin = require('../models/auth');

// Create a new company
exports.createCompany = asyncHandler(async (req, res) => {
    const { name, siret, numOfEmployees, address, postalCode, city } = req.body;
    const { id } = req.params; // Get the admin ID from request parameters

    console.log(id);
    try {
        // Find the admin by ID
        const admin = await Admin.findById(id);
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        // Create a new company and associate it with the admin who created it
        const company = new Company({
            name,
            siret,
            numOfEmployees,
            address,
            postalCode,
            city,
            Admin: id,
            adminName: admin.username // Access the 'username' field from the 'admin' object
        });
        const savedCompany = await company.save();

        // Update the admin's list of companies
        admin.companies.push(savedCompany._id);
        await admin.save();

        return res.status(201).json({
            message: "Company created successfully",
            company: savedCompany
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error creating the company", error: error.message });
    }
});
exports.getAdminCompanies = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        // Find the admin by ID
        const admin = await Admin.findById(id).populate('companies');
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        // Get the companies associated with the admin
        const companies = admin.companies;

        return res.json(companies);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error fetching companies", error: error.message });
    }
});
// Retrieve details of a specific company
exports.getCompanyById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        // Find the company by ID and ensure it belongs to the authenticated admin
        const company = await Company.findOne({ _id: id });
        if (!company) {
            return res.status(404).json({ message: "Company not found" });
        }

        return res.status(200).json({ company });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to fetch company details", error: error.message });
    }
});
// Update details of a specific company
exports.updateCompany = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        // Find and update the company, ensuring it belongs to the authenticated admin
        const updatedCompany = await Company.findOneAndUpdate({ _id: id }, updates, { new: true });
        if (!updatedCompany) {
            return res.status(404).json({ message: "Company not found" });
        }

        return res.status(200).json({ message: "Company updated successfully", company: updatedCompany });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to update company", error: error.message });
    }
});
// Delete a specific company
exports.deleteCompany = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        // Find and delete the company, ensuring it belongs to the authenticated admin
        // const deletedCompany = await Company.findOneAndDelete({ _id: id, admin: req.user.id });
        const deletedCompany = await Company.findOneAndDelete({ _id: id });
        if (!deletedCompany) {
            return res.status(404).json({ message: "Company not found" });
        }

        return res.status(200).json({ message: "Company deleted successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to delete company", error: error.message });
    }
});