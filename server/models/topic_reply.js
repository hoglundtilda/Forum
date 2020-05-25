const mongoose = require("mongoose");

const topic_replySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  reply_id: {
    type: Number,
    required: true
  },
  user_id: {
    type: Number,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("Topic_reply", topic_replySchema);
