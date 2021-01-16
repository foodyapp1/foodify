const { Schema, model } = require("mongoose");

const likesSchema = new Schema({
post_Id:{
    type:String,
    required:true,
},
user_Id:{
    type:String,
    required:true,
},
date: {
    type: Date,
    default: Date.now,
}
});

const like = model("like", likesSchema);

module.exports = like;
