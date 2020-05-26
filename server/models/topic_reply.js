const mongoose = require("mongoose");

const topic_replySchema = new mongoose.Schema({
  topic_id: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Topic_reply", topic_replySchema);
