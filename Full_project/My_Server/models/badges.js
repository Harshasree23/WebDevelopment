const mongoose = require('mongoose'); 

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    badgeName:{
        type:String,
        required:true,
        unique:true,
    },
    validate:{
        type:String,
        required:true,
        unique:true,
    },
});

let userModel = mongoose.model('badges',userSchema);

module.exports = {
    userModel,
}