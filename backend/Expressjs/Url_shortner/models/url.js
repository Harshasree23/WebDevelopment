const mongoose = require('mongoose');

const schema = mongoose.Schema({
    shortId : {
        type: String,
        required: true,
        unique: true,
    },
    redirectURL : {
        type: String,
        required : true,
    },
    history : [ {
        timeStamp : {
            type: Number,
        }
    } ]
}, {timestamps: true} );

const URL = mongoose.model('url',schema);

module.exports = {
    URL,
}