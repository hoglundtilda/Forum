const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Get all user
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one user
router.get("/:id", (req, res) => {});

// Register User
const BCRYPT_SALT_ROUNDS = 12;
router.post("/register", (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const pwd = req.body.pwd;
  const regDate = req.body.regDate;

  // Hashing PW before saving in DB
  bcrypt
    .hash(pwd, BCRYPT_SALT_ROUNDS)
    .then(hashedPwd => {
      const user = new User({
        email: email,
        username: username,
        pwd: hashedPwd,
        regDate: regDate
      });
      return user;
    })
    .then(user => {
      console.log(user);
      user.save();
    })
    .catch(error => {
      console.log("Error saving user: ");
      console.log(error);
    });

  /* const user = new User({
    email: req.body.email,
    username: req.body.username,
    pwd: req.body.pwd,
    regDate: req.body.regDate
  }); */

  /* try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  */
});

// Update one user
router.patch("/:id", (req, res) => {});

// Delete one user
router.delete("/:id", (req, res) => {});

module.exports = router;
