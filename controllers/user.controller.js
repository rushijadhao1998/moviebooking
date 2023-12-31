// controllers/user.controller.js
const User = require('../models/user.model');

// Define controller functions
// ...

const uuidv4 = require('uuidv4');
const { TokenGenerator } = require('uuid-token-generator');
const b2a = require('b2a');

const tokenGenerator = new TokenGenerator();

exports.signUp = async (req, res) => {
  try {
    const { first_name, last_name } = req.body;
    const username = b2a.encode(first_name + last_name);
    const uuid = uuidv4();
    const accessToken = tokenGenerator.generate();

    const user = new User({
      username,
      uuid,
      accessToken,
      isLoggedIn: true,
    });

    await user.save();

    res.json({ message: 'User signed up successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Implement logic to check if the username and password match the data in the USER schema
    const user = await User.findOne({ username, password });

    if (user) {
      // Update user's access token and set isLoggedIn to true
      user.accessToken = tokenGenerator.generate();
      user.isLoggedIn = true;
      await user.save();

      res.json({ message: 'Login successful', user });
    } else {
      res.status(401).json({ error: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.logout = async (req, res) => {
  try {
    const { userId } = req.body;

    // Implement logic to find the user by userId and set isLoggedIn to false
    const user = await User.findById(userId);

    if (user) {
      user.isLoggedIn = false;
      await user.save();

      res.json({ message: 'Logout successful' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getCouponCode = async (req, res) => {
    try {
      // Implement logic to generate and return a coupon code
      const couponCode = 'XYZ123'; // Replace with actual logic to generate a coupon code
  
      res.json({ couponCode });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  exports.bookShow = async (req, res) => {
    try {
      const { userId, showId, numberOfTickets } = req.body;
  
      // Implement logic to book a show for the user
      // Update the database, deduct available tickets, etc.
  
      res.json({ message: 'Show booked successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
