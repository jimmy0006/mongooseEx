const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true
    },
    CreatedAt:{
        type:Date,
        default:Date.now,
    },
})

module.exports = mongoose.model('User',User);