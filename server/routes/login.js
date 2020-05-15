//import config from "../config/db.js";
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const randtoken = require("rand-token");
const auth = require("../middleware/auth");

const router = express.Router();
const db = mongoose.connection;
const User = db.usersSchema;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const getUser = async username => {
  const userDoc = await mongoose
    .model("User", User)
    .findOne({ username: username })
    .exec();
  return userDoc;
};
const refreshTokens = {};
router.post("/login", (req, res) => {
  const username = req.body.username;
  const pwd = req.body.pwd;
  getUser(username)
    .then(user => {
      const samePwd = bcrypt.compare(pwd, user.pwd);
      if (!samePwd) {
        res.status(403);
      } else {
        const refreshToken = randtoken.uid(256);
        refreshTokens[refreshToken] = username;
        jwt.sign({ user }, "secretkey", (err, token) => {
          res.json({
            success: true,
            token,
            refreshToken
          });
        });
      }
    })
    .catch(error => {
      console.log("Error authenticating user: ", error);
    });
});

router.get("/user", auth, (req, res) => {
  try {
    // req.user is getting fetched from Middleware after token authentication
    res.json({ success: true, user: req.user });
  } catch (e) {
    res.send({ message: "Error in Fetching user" });
  }
});

module.exports = router;
