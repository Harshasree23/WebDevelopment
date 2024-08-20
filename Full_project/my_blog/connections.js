const mongoose = require('mongoose');



const connectToDb = async(dbName) => {
    return await mongoose.connect(`mongodb://localhost:27017/${dbName}`);
};


module.exports = {
    connectToDb,
}