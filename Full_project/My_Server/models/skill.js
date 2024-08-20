const mongoose = require('mongoose'); 

// Declare the Schema of the Mongo model
var skillSchema = new mongoose.Schema({
    skillName:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:true,
    },
    learnedFrom:[{
        company: String,
    }],
    Projects:[{
        project:String,
        description: String,
    }],
    certificates:[{
        name:String,
        issuedBy:String,
        dateObtained: Date,
     }],
});

let skillModel = mongoose.model('badges',skillSchema);

module.exports = {
    skillModel,
}