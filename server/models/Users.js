const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  handle: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    sparse: true,
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
    default: []
  },

  location: {
    type: String,
    default: null,
  },
  image: {
    type: String,
    default: null,
  },
  followingYou:{
    type : Number,
    default: 0
  }
});

const users = model("users", userSchema);

module.exports = users;
