const jwt = require("jsonwebtoken");
const constants = require("../config/constants");

function signToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
  };

  const options = {
    expiresIn: "1d",
  };
  return jwt.sign(payload, constants.jwtSecret, options);
}

module.exports = signToken;
