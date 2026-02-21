const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Controller for user registration
async function registerController(req, res) {
  const { username, email, password, bio, profileImage } = req.body;

  // Check if user already exists with same username OR email
  const isUserExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  // If user already exists, return error
  if (isUserExists) {
    return res.status(409).json({
      message: "User already exists with this Username or Email",
    });
  }

  // Hash the password before saving (10 = salt rounds)
  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password: hash,
    bio,
    profileImage,
  });

  // Generate JWT token
  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );

  // Store token in cookies
  res.cookie("token", token);

  res.status(201).json({
    message: "User Registered Successfully",
    username: user.username,
    email: user.email,
    bio: user.bio,
    profileImage: user.profileImage,
  });
}

// Controller for user login
async function loginController(req, res) {
  const { username, email, password } = req.body;

  // Find user by username OR email
  const user = await userModel.findOne({
    $or: [{ username: username }, { email: email }],
  });

  // If user not found, return error
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  // Compare entered password with hashed password
  const isValidPassword = await bcrypt.compare(password, user.password);

  // If password is incorrect, return error
  if (!isValidPassword) {
    return res.status(401).json({
      message: "Invalid Password",
    });
  }

  // Generate JWT token after successful login
  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );

  // Store token in cookies
  res.cookie("token", token);

  res.status(200).json({
    message: "User LoggedIn Successfully",
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
}

// Controller to get current loggedIn user details
async function getMeController(req, res) {
  const userId = req.user.id;

  const user = await userModel.findById(userId);

  res.status(200).json({
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
}

module.exports = {
  registerController,
  loginController,
  getMeController,
};
