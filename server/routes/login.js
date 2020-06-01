//import config from "../config/db.js";
const express = require("express"),
bodyParser = require("body-parser"),
bcrypt = require("bcrypt"),
mongoose = require("mongoose"),
jwt = require("jsonwebtoken"),
randtoken = require("rand-token"),
auth = require("../middleware/auth"),
router = express.Router(),
db = mongoose.connection,
userSchema = db.usersSchema;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const getUser = async username => {
  const userDoc = await mongoose
    .model("User", userSchema)
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
    .catch(err => {
      console.log("Error authenticating user: ", err);
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
