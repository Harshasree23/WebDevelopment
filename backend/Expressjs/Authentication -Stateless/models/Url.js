const mongoose = require('mongoose'); 


var URLschema = new mongoose.Schema({
    FullUrl:{
        type:String,
        required:true,
    },
    ShortID:{
        type:String,
        required:true,
        unique:true,
    },
    history:[{
        timestamp:{
            type: Number,
        },
    }],
    createdBy:{
        type : mongoose.Schema.Types.ObjectId,
        ref:'user',
    }
});

const URLmodel = mongoose.model('url', URLschema);

module.exports =
{
    URLmodel,
} 