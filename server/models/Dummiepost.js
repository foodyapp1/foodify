const { Schema, model } = require("mongoose");

const DumpostSchema = new Schema({
    user_id: { 
        type: String,
        required: true
    },
    title : { 
        type:String, 
        required:true 
    },
    image : { 
        type:String,
        required:true
    },
    text : {
        type:String,
        required:true
    },
    reported :{
        type:Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

const Dumpost = model("dumpost", DumpostSchema);

module.exports = Dumpost;