const Admin = require("../models/auth");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Company = require("../models/Company")

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    
    try {
        if (!password || !email) {
            return res.status(402).json({ message: "All fields are required" });
        }

        // Find the admin user by email
        const adminUser = await Admin.findOne({ email });

        if (!adminUser) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Compare the provided password with the hashed password
        const isPasswordValid = await bcrypt.compare(password, adminUser.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        console.log(adminUser._id);
        const company = await Company.findOne({Admin: adminUser._id})
        // Generate JWT token for admin user
        const token = jwt.sign(
            { email: adminUser.email, id: adminUser._id, userType: adminUser.userType },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        res.cookie("token", token, {
            httpOnly: true,
        });

        console.log(company);
        return res.status(201).json({ token, id: adminUser._id, userType: adminUser.userType, companyId:company._id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

const logout = asyncHandler(async (req,res)=> {
    res.status(200).json({ message: 'Logged out successfully' });
})

module.exports = { login, logout };