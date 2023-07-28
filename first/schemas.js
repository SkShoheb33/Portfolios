const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName:String,
    middleName:String,
    lastName:String,
    userName:String,
    number:String,
    email:String,
    github:String,
    password:String,
    desc:String,
    Skills:Array,
    Projects:Array
})
user = mongoose.model('users',userSchema);
module.exports = user;