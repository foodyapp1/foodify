const { Schema, model } = require("mongoose");

const commentsSchema = new Schema({
post_Id:{
    type:String,
    required:true,
},
user_Id:{
    type:String,
    required:true,
},
username:{
    type:String,
    required:true,
},
text:{
    type:String,
    required:true
},
date: {
    type: Date,
    default: Date.now,
}
});

const comments = model("comment", commentsSchema);

module.exports = comments;
