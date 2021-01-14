const { Schema, model } = require("mongoose");

const postsschema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  userid: {
    type: String,
    required: true,
  },
  imageurl: {
    type: String,
  },
  postbody: {
    type: String,
  },
  posttitle: {
    type: String,
  },
});

const posts = model("posts", postsschema, "posts");
module.exports = posts;
