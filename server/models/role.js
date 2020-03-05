const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true,
    default: "regular_user"
  }
});

module.exports = mongoose.model("Roles", roleSchema);
