const router = require("express").Router();

//imports
const registerRouter = require("../routes/register/register-router");
const loginRouter = require("../routes/login/login-router");
const usersRouter = require("../routes/users/users-router");
const commentsRouter = require("../routes/comments/comments-router");

router.use("/register", registerRouter);
router.use("/login", loginRouter);

//middleware
const authMiddleWare = require("../auth/authenticate-middleware");

router.use("/users", authMiddleWare, usersRouter);
router.use("/comments", authMiddleWare, commentsRouter);

router.get("/", (req, res) => {
  res.send("<h1>Api is running, will you keep up?</h1>");
});

module.exports = router;
