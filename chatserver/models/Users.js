const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  useremail: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "user",
  },
  followers: {
    type: Array,
  },
});

const users = model("users", userSchema);

module.exports = users;
