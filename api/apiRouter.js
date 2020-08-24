const router = require("express").Router();

//imports
const registerRouter = require("../routes/register/register-router");
const loginRouter = require("../routes/login/login-router");
const usersRouter = require("../routes/users/users-router");
const commentsRouter = require("../routes/comments/comments-router");

router.use("/register", registerRouter);
router.use("/login", loginRouter);

//middleware
//? should not be accessed without login and auth

// router.use("/users", usersRouter);
// router.use("/comments", commentsRouter);

router.get("/", (req, res) => {
  res.send("<h1>Api is running, will you keep up?</h1>");
});

module.exports = router;
