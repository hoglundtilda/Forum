const express = require("express");
const Category = require("../models/category");
// const Topic = require("../models/topic");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const router = express.Router();
const db = mongoose.connection;
const categorySchema = db.usersSchema;
const topicSchema = db.topicSchema;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Get all categories
router.get("/getCategories", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const getCategoryTopics = async (category_id) => {
  const category = await mongoose
    .model("Category", categorySchema)
    .findOne({ _id: category_id })
    .exec();
  console.log(category);
  return category;
};

// get specific category with topics
router.post("/categoryTopics", (req, res) => {
  const category_id = req.body.id;
  console.log(category_id);
  getCategoryTopics(category_id)
    .then((category) => {
      if (!category) {
        res.status(403);
      } else {
        res.json({
          category,
        });
      }
    })
    .catch((error) => {
      console.log("Error:  ", error);
    });
});

router.get("/getPostsByCategory", async (req, res) => {
  const category_id = req.body.id;

  const topic = await mongoose
    .model("Topic", topicSchema)
    .find({ category_id: category_id })
    .exec();

  console.log(topic);
  res.json(topic);
});

module.exports = router;
