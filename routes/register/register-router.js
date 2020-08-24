const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Users = require("../users/user-model.js");
const signToken = require("../../auth/signToken");

router.post("/", (req, res) => {
  const { username, password } = req.body;

  const hash = bcrypt.hashSync(password);

  Users.addUser({ username, password: hash })
    .then((user) => {
      const token = signToken(user);
      res.status(200).json({ newUser: user, token });
    })
    .catch((error) => {
      res.status(500).json({ message: "could not register", error: error });
    });
});

module.exports = router;
