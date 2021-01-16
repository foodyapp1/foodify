const { Schema, model } = require("mongoose");

const reportSchema = new Schema({
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
},
inappropriate:{
    type:Boolean,
    required:true,
},

hate:{
    type:Boolean,
    required:true,
},
abuse:{
    type:Boolean,
    required:true,
}

});

const report = model("report", reportSchema);

module.exports = report;
