const express = require("express");
const bodyParser = require("body-parser");
const User = require("../models/user");
const upload = require("../middleware/upload")
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/avatar", upload.single("avatarImage"), async (req, res) => {

  User.updateOne(
    { _id: req.body.user_id },
    { $set: { avatar: req.file.id } },
    (err) => {
      if (err) console.log(err);
    }
  );
  res.send();
});

module.exports = router;
