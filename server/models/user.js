const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  email: {
    type: String,
    // type: mongoose
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  pwd: {
    type: String,
    required: true,
  },
  regDate: {
    type: String,
    required: true,
  } /* ,
  role: {
    type: String,
    required: true,
    default: "user"
  } */,
});

module.exports = mongoose.model("User", usersSchema);
