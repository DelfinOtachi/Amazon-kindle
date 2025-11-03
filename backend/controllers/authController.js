const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Generate JWT
const generateToken = (id) => {
    // Replace with env variable in production
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });

};

// @route POST /api/auth/register
exports.register = async(req, res) => {
    const { name, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: 'User already exists' });

        const user = await User.create({ name, email, password });
        console.log('Register route hit'); // <-- Add this

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id)
        });
    } catch (error) {
        res.status(500).json({ message: 'Registration error', error });
    }
};

// @route POST /api/auth/login
//@exports.login = async(req, res) => {
//const { email, password } = req.body;
//try {
//const user = await User.findOne({ email });
//if (!user || !(await user.matchPassword(password))) {
//return res.status(401).json({ message: 'Invalid email or password' });
//}

//res.json({ _id: user._id, name: user.name, email: user.email, token: generateToken(user._id) });
//}
//catch (error) {
//res.status(500).json({ message: 'Login error', error });
//}

//}
exports.login = async(req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({
                id: user._id,
                email: user.email,
                role: user.role,
            },
            process.env.JWT_SECRET, { expiresIn: '1d' }
        );

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token
        });
    } catch (error) {
        res.status(500).json({ message: 'Login error', error });
    }
};