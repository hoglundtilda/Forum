const mongoose = require("mongoose");
const topicSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  category_id: {
    id: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true
  },
  title: {
    type: String,
    required: true
  },
  user_id: {
    type: Number,
    required: true
  },
  created_at: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("Topic", topicSchema);
