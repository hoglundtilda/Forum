const express = require("express"),
bodyParser = require("body-parser"),
mongoose = require("mongoose"),
Category = require("../models/category"),
router = express.Router(),
db = mongoose.connection,
categorySchema = db.usersSchema,
topicSchema = db.topicSchema;

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

const getCategory = async (category_id) => {
  const category = await mongoose
    .model("Category", categorySchema)
    .findOne({ _id: category_id })
    .exec();
  console.log(category);
  return category;
};

// get specific category
router.get("/getCategory", (req, res) => {
  const category_id = req.headers.category_id;
  getCategory(category_id)
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

router.get("/getTopicsByCategory", async (req, res) => {
  const category_id = req.headers.category_id;
  const category = await mongoose
    .model("Topic", topicSchema)
    .find({ category_id: category_id })
    .exec();

  res.json(category);
});

module.exports = router;
