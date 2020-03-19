const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
  category_id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("Topic", topicSchema);
