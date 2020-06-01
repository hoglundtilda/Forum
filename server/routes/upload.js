const express = require("express"),
bodyParser = require("body-parser"),
User = require("../models/user"),
multer  = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname)
  }
});

const upload = multer({ storage: storage });

router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/avatar", upload.single("avatarImage"), async (req, res) => {
  // console.log(req.file)
  User.updateOne(
    { _id: req.body.user_id },
    { $set: { avatar: req.file.filename } },
    (err) => {
      if (err) console.log(err);
    }
  );

  res.send(req.file);
});

module.exports = router;
