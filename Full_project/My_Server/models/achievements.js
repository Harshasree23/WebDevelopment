const mongoose = require('mongoose'); 

// Declare the Schema of the Mongo model
var achievementSchema = new mongoose.Schema({
    achievementName:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:true,
    },
    skills:[{
        skill: String,
    }],
});

let achievementModel = mongoose.model('badges',achievementSchema);

module.exports = {
    achievementModel,
}