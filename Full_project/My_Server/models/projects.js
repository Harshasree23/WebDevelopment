const mongoose = require('mongoose'); 

// Declare the Schema of the Mongo model
var projectSchema = new mongoose.Schema({
    projectName:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:true,
    },
    usedTechnologies:[{
        techName:String,
        description: String,
    }],
    link:{
        type:String,
        required:true,
    },
    git:{
        type:String,
        required:true,
    },
    video:{
        type:String,
    },
});

let projectModel = mongoose.model('badges',projectSchema);

module.exports = {
    projectModel,
}