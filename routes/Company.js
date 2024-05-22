// const express = require('express');
// const router = express.Router();
// const { onboardCompany } = require('../controllers/onboarding'); // Ensure the controller name is correct

// router.post('/onboard', onboardCompany);

// module.exports = router;


const express = require('express');
const companyRouter = express.Router();
const { userAuth } = require('../middleware/jwt');
const { createCompany, getAdminCompanies, getCompanyById, updateCompany, deleteCompany } = require('../controllers/Company');

// Create a new company (requires authentication)
companyRouter.post("/register-company/:id", createCompany);
// Retrieve all companies created by the authenticated admin
companyRouter.get('/companies/:id', getAdminCompanies);
// Retrieve details of a specific company
companyRouter.get('/company/:id', getCompanyById);
// Update details of a specific company
companyRouter.patch('/update/company/:id', updateCompany);
// Delete a specific company
companyRouter.delete('/delete/company/:id', deleteCompany);

module.exports = companyRouter;
