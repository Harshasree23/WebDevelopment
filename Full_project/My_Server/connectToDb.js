const mongoose = require('mongoose');

const makeConnection  = async (db_name) => {
    return await mongoose.connect('mongodb://localhost:27017/${db_name}', (err) => {
        if (!err) {
            console.log('MongoDB Connection Succeeded.')
        } else {
            console.log('Error in DB connection: ' + err)
        }
    });
}

