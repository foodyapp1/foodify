const { Schema, model } = require("mongoose");
const messagesschema = new Schema({
  message: {
    type: String,
    required: true,
  },
  senderid: {
    type: String,
    required: true,
  },
  receiverid: {
    type: String,
    required: true,
  },
});

const messages = model("messages", messagesschema);
module.exports = messages;
