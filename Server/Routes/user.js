const express = require("express");
const user = require("../models/userSchema");
const {
  handleSignUP,
  handleLogin,
  handleLogout,
  handleUpdate,
  handleCurrentUser,
  handleDelete,
  handleEnrollment,
  handleReadAllUsers,
} = require("../Controllers/user");
const { jwtAuthMiddleware } = require("../Authentication/Auth");

const router = express.Router();

// http://localhost:3000/api/users/signup
router.post("/signup", handleSignUP);

router.post("/login", handleLogin);

router.post("/update/user", handleUpdate);

router.post("/delete/user", handleDelete);

router.get("/readAllUsers",jwtAuthMiddleware ,  handleReadAllUsers);

router.get("/currentUser",jwtAuthMiddleware,handleCurrentUser);

//Handle Enrolled Courses;
router.post("/enrollment/:courseId", handleEnrollment);

// router.post("/test")

// Testing APIss
// router.get("/test", (req, res) => {
//   console.log(req.cookies);
//   return res.status(200).json({ message: "Cookies logged successfully" });
// });

// router.get("/delete", (req, res) => {
//   res.clearCookie("token");
//   res.status(200).json({ message: "Cookies logged successfully" });
// });

// router.use(function (req, res, next) {
//   res.header("Content-Type", "application/json;charset=UTF-8");
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// router.get("/auth", function (req, res) {
//   res.cookie("token", "someauthtoken");
//   res.json({ id: 2 });
// });

module.exports = router;
