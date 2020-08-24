const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Users = require("../users/user-model.js");
const signToken = require("../../auth/signToken");

router.post("/", (req, res) => {
  const { username, password } = req.body;

  Users.findBy({ username: username })
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = signToken(user);
        res
          .status(200)
          .json({ message: `${user.username}, you are logged in`, token });
      } else {
        res.status(401).json({ message: "invalid" });
      }
    })
    .catch((error) => {
      res.status(401).json({ message: "failed to login", error: error });
    });
});

module.exports = router;
