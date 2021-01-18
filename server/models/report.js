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
inappropriate:{
    type:Boolean,
    default:false,
},
hate:{
    type:Boolean,
    default:false,
},
abuse:{
    type:Boolean,
    default:false,
},
date: {
    type: Date,
    default: Date.now,
}
});

const report = model("report", reportSchema);

module.exports = report;
