const express = require("express");
const Category = require("../models/category");
const bodyParser = require("body-parser");
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Get all categories
router.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find();
    console.log(categories);

    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* // Get category
router.get("/:id", (req, res) => {}); */

// Register User
router.post("/category", (req, res) => {
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
