const mongoose = require('mongoose');

const makeConnection  = async (db_name) => {
    return await mongoose.connect(`mongodb://localhost:27017/${db_name}`);
}

module.exports = {
    makeConnection,
}