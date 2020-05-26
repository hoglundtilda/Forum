const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Topic = require("../models/topic");
const Reply = require("../models/topic_reply");

const router = express.Router();
const db = mongoose.connection;
const topicSchema = db.topicSchema;
const topic_replySchema = db.topic_replySchema;
const userSchema = db.userSchema;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/postTopic", (req) => {
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
    created_at: date,
  });

  topic.save();
});

router.post("/postReply", async (req) => {
  const user_id = req.body.user_id;
  const topic_id = req.body.topic_id;
  const content = req.body.content;
  const date = new Date();
  const user = await mongoose
    .model("User", userSchema)
    .findOne({ _id: user_id })
    .exec();

  const reply = new Reply({
    topic_id: topic_id,
    content: content,
    user_id: user_id,
    username: user.username,
    created_at: date,
  });
  console.log(reply);

  reply.save();
});

router.get("/getTopic", async (req, res) => {
  try {
    const topic_id = req.headers.topic_id;
    const topic = await mongoose
      .model("Topic", topicSchema)
      .findOne({ _id: topic_id })
      .exec();
    res.json(topic);
  } catch (err) {
    console.log(err);
  }
});

router.get("/getTopicReplies", async (req, res) => {
  try {
    const topic_id = req.headers.topic_id;
    const topic = await mongoose
      .model("Topic_reply", topic_replySchema)
      .find({ topic_id: topic_id })
      .exec();
    res.json(topic);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
