const express = require("express");
const Category = require("../models/category");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Add new category (Admin only)
router.post("/addCat", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const imgUrl = req.body.img;

  const category = new Category({
    title: title,
    description: description,
    img: imgUrl
  });

  category.save();
});

module.exports = router;
