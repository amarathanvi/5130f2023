// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Mock database to store user data (replace this with an actual database)
const users = [];

// Generate a random verification code (for demonstration purposes)
function generateVerificationCode() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

// Send verification email (in a real-world scenario, use a dedicated service for sending emails)
function sendVerificationEmail(email, verificationCode) {
    console.log(`Sending verification email to ${email} with code: ${verificationCode}`);
    // Implement your email sending logic here
}

app.post('/signup', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    // Save user data to the mock database
    users.push({ email, password, verified: false });

    // Generate and send a verification code
    let verificationCode = generateVerificationCode();
    sendVerificationEmail(email, verificationCode);

    res.send('Sign Up Successful. Check your email for verification.');
});

app.post('/verify', (req, res) => {
    let verificationCode = req.body.verificationCode;

    // Find the user in the database (replace with a proper database query)
    let user = users.find(u => u.verificationCode === verificationCode);

    if (user) {
        // Mark the user as verified (update the database accordingly)
        user.verified = true;
        res.send('Email Verified Successfully');
    } else {
        res.send('Invalid Verification Code');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
