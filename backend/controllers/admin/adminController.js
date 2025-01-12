const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../../model/adminModel"); // Import the Admin model

// Admin Signup
const signupAdmin = async (req, res) => {
  const { name, email, password, role } = req.body;

  // Check if email already exists
  const existingAdmin = await Admin.findOne({ email });
  if (existingAdmin) {
    return res
      .status(400)
      .json({ message: "Admin already exists with this email." });
  }

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin instance
    const newAdmin = new Admin({
      name,
      email,
      password: hashedPassword,
      role,
    });

    // Save the new admin to the database
    await newAdmin.save();

    // Generate JWT token
    const token = jwt.sign(
      { adminId: newAdmin._id, role: newAdmin.role },
      "your_jwt_secret_key", // Replace with your actual JWT secret key
      { expiresIn: "1h" }
    );

    // Respond with the token and admin details
    res.status(201).json({
      message: "Admin signed up successfully.",
      token,
      admin: {
        id: newAdmin._id,
        name: newAdmin.name,
        email: newAdmin.email,
        role: newAdmin.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error during signup." });
  }
};

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if admin exists
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res
        .status(400)
        .json({ message: "Admin not found with this email." });
    }

    // Compare password
    const isPasswordMatch = await bcrypt.compare(password, admin.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Incorrect password." });
    }

    // Generate JWT token
    const token = jwt.sign(
      { adminId: admin._id, role: admin.role },
      "your_jwt_secret_key", // Replace with your actual JWT secret key
      { expiresIn: "1h" }
    );

    // Respond with the token and admin details
    res.status(200).json({
      message: "Admin logged in successfully.",
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error during login." });
  }
};

module.exports = { signupAdmin, loginAdmin };
