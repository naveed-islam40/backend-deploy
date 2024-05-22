const Admin = require("../models/auth");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    console.log("request Coming");
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

        // Generate JWT token for admin user
        const token = jwt.sign(
            { email: adminUser.email, id: adminUser._id, userType: adminUser.userType },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        res.cookie("token", token, {
            httpOnly: true,
        });

        return res.status(201).json({ token, id: adminUser._id, userType: adminUser.userType });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

module.exports = { login };