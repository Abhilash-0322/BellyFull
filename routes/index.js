const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Home page
router.get('/', (req, res) => {
    res.render('home');
});

// Mission page
router.get('/mission', (req, res) => {
    res.render('mission');
});

// Vision page
router.get('/vision', (req, res) => {
    res.render('vision');
});

// Form page
router.get('/form1', (req, res) => {
    res.render('form1');
});

// Handle form submission and display matches
router.post('/database', async (req, res) => {
    try {
        const { name, choice, phone_no, city } = req.body;

        // Validate input
        if (!name || !choice || !phone_no || !city) {
            return res.status(400).send('All fields are required');
        }

        // Validate phone number
        if (!/^[0-9]{10}$/.test(phone_no)) {
            return res.status(400).send('Please enter a valid 10-digit phone number');
        }

        // Create new user
        const newUser = new User({
            name: name.trim(),
            choice,
            phone_no,
            city: city.trim()
        });

        await newUser.save();

        // Find matching users
        const oppositeChoice = choice === 'don' ? 'rec' : 'don';
        const matchingUsers = await User.find({
            choice: oppositeChoice,
            city: { $regex: new RegExp(city.trim(), 'i') } // Case-insensitive city match
        }).select('name city phone_no -_id');

        res.render('database', {
            choice,
            city: city.trim(),
            result: matchingUsers
        });

    } catch (error) {
        console.error('Database error:', error);
        if (error.name === 'ValidationError') {
            res.status(400).send('Invalid data provided. Please check your inputs.');
        } else {
            res.status(500).send('An error occurred while processing your request. Please try again.');
        }
    }
});

module.exports = router;
