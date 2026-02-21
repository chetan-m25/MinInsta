const jwt = require("jsonwebtoken");

async function identifyUser(req, res, next) {
  // Check token is provided, If missing deny unauthorized access
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Token not Found, UnAuthorized Access",
    });
  }

  // Verify JWT token and return error if token is invalid or expired
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: "UnAuthorized Access",
    });
  }

  // Attach decoded user data to request and move to next middleware
  req.user = decoded;
  next();
}

module.exports = identifyUser;
