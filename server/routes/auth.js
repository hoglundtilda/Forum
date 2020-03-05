const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

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

router.post("/", (req, res) => {
  const username = req.body.username;
  const pwd = req.body.pwd;
  getUser(username)
    .then(userDoc => {
      return bcrypt.compare(pwd, userDoc.pwd);
    })
    .then(samePwd => {
      console.log(samePwd);
      if (!samePwd) {
        res.status(403);
      } else {
        res.status(200);
      }
      res.send();
    })
    .catch(error => {
      console.log("Error authenticating user: ");
      console.log(error);
    });
});

module.exports = router;
