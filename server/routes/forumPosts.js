const express = require("express");
const Topic = require("../models/topic");
const bodyParser = require("body-parser");
const getUser = require("../middleware/getUser");

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// get specific category with topics
router.post("/addTopic", (req, res) => {
  const user_id = req.body.user_id;
  const category_id = req.body.category_id;
  const title = req.body.title;
  const description = req.body.description;
  const date = new Date();

  const topic = new Topic({
    category_id: category_id,
    title: title,
    description: description,
    user_id: user_id,
    created_at: date
  });
  topic.save();
});

module.exports = router;
