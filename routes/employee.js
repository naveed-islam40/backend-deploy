const express = require('express');
const router = express.Router();
const { userAuth } = require('../middleware/jwt');
const multer = require('multer')
const { createEmployee, getEmployeeById, getAllEmployees, updateEmployee, deleteEmployee, getEmployeesByAdminId, uploadEmployees, getEmployeesByCompanyId } = require('../controllers/employee');



const upload = multer({ dest: 'uploads/' });
// Create Employee
router.post('/employee/register/:companyId', createEmployee);



// Get Employee Profile
router.get('/get-employee/:id', getEmployeeById);

// Get All Employees Profiles
router.get('/get-employees', getAllEmployees);

// Update Employee Profile
router.patch('/update-employee/:id', updateEmployee);

// Get Employees by adminId
router.get("/get/admin/employee/:id", getEmployeesByAdminId)


router.post('/companies/:companyId/employees/upload', upload.single('file'), uploadEmployees);

router.get('/employees/:companyId', getEmployeesByCompanyId);

// Delete Employee Profile
// router.delete('/delete-employee/:adminId/:companyId', deleteEmployee);
router.delete('/delete-employee/:id', deleteEmployee);
module.exports = router;
