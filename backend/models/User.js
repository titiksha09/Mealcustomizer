// const { Dropdown } = require('bootstrap');
const mongoose = require('mongoose')

const{ Schema } = mongoose;

const userSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    height:{
        type: Number,
        required:true
    },
    weight:{
        type: Number,
        required:true
    },
    age:{
        type: Number,
        required:true
    },
    gender:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    }

});

module.exports = mongoose.model('user',userSchema);