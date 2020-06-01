const express = require("express"),
User = require("../models/user"),
bodyParser = require("body-parser"),
bcrypt = require("bcrypt"),
router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Register User
const BCRYPT_SALT_ROUNDS = 12;
router.post("/register", req => {
  const email = req.body.email,
  username = req.body.username,
  pwd = req.body.pwd,
  regDate = req.body.regDate;

  bcrypt
    .hash(pwd, BCRYPT_SALT_ROUNDS)
    .then(hashedPwd => {
      const user = new User({
        email: email,
        username: username,
        pwd: hashedPwd,
        avatar: "",
        regDate: regDate
      });
      return user;
    })
    .then(user => {
      console.log(user);
      user.save();
    })
    .catch(error => {
      console.log("Error saving user:", error);
    });
});

/* // Update one user
router.patch("/:id", (req, res) => {});

// Delete one user
router.delete("/:id", (req, res) => {}); */

module.exports = router;
