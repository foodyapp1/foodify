const { Schema, model } = require("mongoose");

const users = new Schema({
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
});

const users = model("users", users);

module.exports = users;
