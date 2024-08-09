const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const user = require("../models/userSchema");
const courseSchema = require("../models/courseSchema");
const jwt = require('jsonwebtoken');
const { generateToken } = require("../Authentication/Auth");

// Handle Users
const handleSignUP = (req, res) => {
  const { name, email, password } = req.body;

  // Hash the password before storing it
  bcrypt.hash(password, 10, async (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ message: "Error hashing password" });
    }

    await user
      .create({
        name,
        email,
        password: hashedPassword,
      })
      .then(() => {

        const payload = {
          username: name,
          password: hashedPassword,
      }

      const token = generateToken(payload)
        // const token = jwt.sign({email,password:hashedPassword}, "shshsh" )

        res
          .cookie("HashedCredentials", token, {
            expires: new Date(Date.now() + 3600000),
            httpOnly: true,
            secure: false, // Set to true if using HTTPS
            sameSite: "strict",
            path: "/", // Cookie is available for the entire domain
          })
          .send("Cookie Set Successfully");
      })
      .catch((error) => {
        console.error("Something went wrong in creating User", error);
        res.status(500).json({ message: "Internal server error" });
      });
  });
};

const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  await user
    .findOne({ email })
    .then((foundUser) => {
      if (!foundUser) {
        return res.status(404).json({ message: "User not found" });
      }

      bcrypt.compare(password, foundUser.password, (err, isMatch) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Error while checking password" });
        }

        if (isMatch) {

          const payload = {
            username: foundUser.name,
            password: foundUser.password,
            _id: foundUser._id
          };
          const token = generateToken(payload);

          res.cookie("HashedCredentials" , token)

          return res
            .status(200)
            .json({ message: "User logged in successfully" });
        } else {
          return res.status(401).json({ message: "Wrong password" });
        }
      });
    })
    .catch((error) => {
      console.error("Something went wrong while finding the user", error);
      res.status(500).json({ message: "Internal server error" });
    });
};

const handleUpdate = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const foundUser = await user.findOne({ email });

    if (!foundUser) {
      return res
        .status(404)
        .json({ message: "User not found with this email" });
    }

    let updatedFields = { name };
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updatedFields.password = hashedPassword;
    }

    const updatedUser = await user.findOneAndUpdate(
      { email },
      { $set: updatedFields },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(500).json({ message: "Error updating user" });
    }

    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Something went wrong while updating the user", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const handleDelete = async (req, res) => {
  const { email } = req.body;

  const deletedUser = await user.findOneAndDelete({ email });

  if (!deletedUser) {
    return res.status(404).json({ message: "User not found with this email" });
  }

  res
    .status(200)
    .json({ message: "User deleted successfully", user: deletedUser });
};

const handleReadAllUsers = async (req, res) => {
  // const users = await user.find().populate('enrolledCourses');
  const users = await user.find();
  res.send(users);
};

const handleCurrentUser = async (req, res) => {
  const data = req.currentData
  const Curr_user = await user.findById(data._id)

  if (!Curr_user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).send(Curr_user);
}

// Handle Enrollments

const handleEnrollment = async (req, res) => {
  const { courseId } = req.params;
  const { userId } = req.body;

  await user
    .findOne({ _id: userId })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      user.enrolledCourses.push(courseId);
      res.status(200).json({ message: "You Enrolled in this course" });
      return user.save();
    })
    .catch((err) => {
      console.error("Something went wrong while enrolling user", err);
      return res.status(500).json({ message: "Internal server error" });
    });
};

module.exports = {
  handleSignUP,
  handleLogin,
  handleUpdate,
  handleDelete,
  handleEnrollment,
  handleReadAllUsers,
  handleCurrentUser
};
