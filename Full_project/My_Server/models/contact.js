const mongoose = require('mongoose'); 

// Declare the Schema of the Mongo model
var contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    contacts:[{
        media:String,
        link:String,
    }],
});

let contactModel = mongoose.model('badges',contactSchema);

module.exports = {
    contactModel,
}