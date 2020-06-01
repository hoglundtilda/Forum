const express = require("express"),
Category = require("../models/category"),
bodyParser = require("body-parser"),
router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Add new category (Admin only)
router.post("/addCat", (req, res) => {
  const title = req.body.title,
  description = req.body.description,
  imgUrl = req.body.img;

  const category = new Category({
    title: title,
    description: description,
    img: imgUrl
  });

  category.save();
});

module.exports = router;
