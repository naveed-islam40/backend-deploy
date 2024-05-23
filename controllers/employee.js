const asyncHandler = require('express-async-handler');
const Employee = require("../models/employee");
const Admin = require('../models/auth');
const Company = require('../models/Company');
const fs = require('fs')
const { default: mongoose } = require('mongoose');
mongoose
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});
 

// Create Employee
exports.createEmployee = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, position, department } = req.body;
  const { companyId } = req.params;


  try {
    // Check if the employee with the provided email already exists
    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee) {
      return res.status(400).json({ message: "Employee with this email already exists" });
    }

    console.log(existingEmployee);
    // Create the employee and associate with the company
    const employee = new Employee({
      firstName,
      lastName,
      email,
      company: companyId,
      position,
      department,
    });



    const savedEmployee = await employee.save();

    console.log(savedEmployee);

    // Update company's list of employees
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }
    company.Employee.push(savedEmployee._id); // Assuming the array field is named "employees"
    await company.save();

    res.status(201).json({ message: "Employee created successfully", employee: savedEmployee });
  } catch (error) {
    console.error("Error creating employee:", error);
    res.status(500).json({ message: "Failed to create employee", error: error.message });
  }
});
// Get all Employees
exports.getAllEmployees = asyncHandler(async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).json({ message: "Failed to fetch employees", error: error.message });
  }
});
// Get Employee by ID
exports.getEmployeeById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json({ employee });
  } catch (error) {
    console.error("Error fetching employee:", error);
    res.status(500).json({ message: "Failed to fetch employee", error: error.message });
  }
});
// Update Employee
exports.updateEmployee = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  console.log("Request Comingng");

  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json({ message: "Employee updated successfully", employee: updatedEmployee });
  } catch (error) {
    console.error("Error updating employee:", error);
    res.status(500).json({ message: "Failed to update employee", error: error.message });
  }
});
// Delete Employee
// Delete Employee
exports.deleteEmployee = asyncHandler(async (req, res) => {
  const { id } = req.params;

  console.log("request coming");

  try {
    // Find the employee to be deleted
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // Update the employee's isDeleted field to true
    employee.isDeleted = true;
    await employee.save();

    res.status(200).json({ message: "Employee marked as deleted successfully" });
  } catch (error) {
    console.error("Error marking employee as deleted:", error);
    res.status(500).json({ message: "Failed to mark employee as deleted", error: error.message });
  }
});

exports.getEmployeesByAdminId = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    // Find the admin by ID and populate the 'Employee' field
    const admin = await Admin.findById(id).populate('Employee');
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Get the employees associated with the admin
    const employees = admin.Employee;

    return res.status(200).json({ employees });
  } catch (error) {
    console.error("Error fetching employees for admin:", error);
    return res.status(500).json({ message: "Error fetching employees", error: error.message });
  }
});

exports.uploadEmployees = async (req, res) => {
  console.log("Req coming...");
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }

  const file = req.file;

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Body: fs.createReadStream(file.path),
    Key: `${Date.now()}_${file.originalname}`,
    };
   
  const { companyId } = req.params;
  try {
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).send('Company not found');
    }

    const uploadResult = await s3.upload(params).promise()

    const getObjectParams = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: params.Key,
    };

    const fileObject = await s3.getObject(getObjectParams).promise();
    const fileContents = fileObject.Body.toString('utf-8');
    const lines = fileContents.trim().split('\n').slice(1);

    console.log(fileContents)
    const employees = [];
    for (const line of lines) {
      const [firstName, lastName, email, department, position, dob, gender] = line.split(/[,;]/).map(field => field.replace(/"/g, '').trim());
      const existingEmployee = await Employee.findOne({ email });

      if (existingEmployee) {
        console.log(`Employee with email ${email} already exists, skipping...`);
        continue;
      }

      const employeeData = {
        firstName,
        lastName,
        email,
        department,
        position,
        company: companyId,
        dob,
        gender
      };
      console.log("employeeData:", employeeData);
      const createEmployee = new Employee(employeeData);
      await createEmployee.save();

      console.log("Employee saved:", createEmployee);

      company.Employee.push(createEmployee);
      employees.push(createEmployee);
    }

    await company.save();

    // Delete the uploaded file after processing
    fs.unlinkSync(req.file.path);
    res.json(employees);

  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Server Error');
  }
}


exports.getEmployeesByCompanyId = asyncHandler(async (req, res) => {
  const { companyId } = req.params;

  try {
    // Find the company
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    // Find employees associated with the company and populate the company details
    const employees = await Employee.find({ company: companyId }).populate('company');

    res.status(200).json({ message: "Employees retrieved successfully", employees });
  } catch (error) {
    console.error("Error retrieving employees:", error);
    res.status(500).json({ message: "Failed to retrieve employees", error: error.message });
  }
});