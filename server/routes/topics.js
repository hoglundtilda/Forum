const express = require("express"),
bodyParser = require("body-parser"),
mongoose = require("mongoose"),
Topic = require("../models/topic"),
Reply = require("../models/topic_reply"),
router = express.Router(),
db = mongoose.connection,
topicSchema = db.topicSchema,
topic_replySchema = db.topic_replySchema,
userSchema = db.userSchema;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/postTopic", async (req, res) => {
  const user_id = req.body.user_id,
  category_id = req.body.category_id,
  title = req.body.title,
  description = req.body.description,
  date = new Date();

  const user = await mongoose
    .model("User", userSchema)
    .findOne({ _id: user_id })
    .exec();

  const topic = new Topic({
    category_id: category_id,
    title: title,
    description: description,
    user_id: user_id,
    username: user.username,
    created_at: date,
  });

  topic.save();
  res.send(topic);
});

router.post("/postReply", async (req, res) => {
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

  reply.save();
  res.send(reply);
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
