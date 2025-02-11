const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const register = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        console.log("Register request body:", req.body);

        if (!username || !email || !password || !role) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword, role });
        
        await newUser.save();
        res.status(201).json({ message: `User created successfully with username: ${username}` });
    } catch (error) {
        console.error("Register Error:", error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

const login = async (req, res) => {
    try {
        console.log("Login request body:", req.body);
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }

        const user = await User.findOne({ username });
        console.log("User found:", user);

        if (!user) {
            return res.status(404).json({ message: `User not found with username: ${username}` });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        console.log("User ID before JWT:", user._id);
        if (!user._id) {
            throw new Error("User ID is undefined");
        }

        const token = jwt.sign(
            { id: user._id.toString(), role: user.role }, // Convert `_id` to string
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({ token });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

module.exports = {
    register,
    login
};
