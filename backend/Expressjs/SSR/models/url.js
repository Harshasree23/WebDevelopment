const mongoose = require('mongoose'); 

// Declare the Schema of the Mongo model
var schema = new mongoose.Schema({
    shortURL:{
        type:String,
        required:true,
        unique:true,
    },
    fullURL:{
        type:String,
        required:true,
        unique:true,
    },
    history:[{
        timestamp : {
            type:Number,
        },
    }],
});


const URL = mongoose.model('url',schema);

//Export the model
module.exports = {
    URL,
}