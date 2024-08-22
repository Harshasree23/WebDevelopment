const mongoose = require('mongoose'); 
const { createHmac , randomBytes } = require('node:crypto');
const { createToken } = require('../services/authentication');

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    salt:{
        type: String,
    },
    password:{
        type: String,
        required:true,
    },
    profile:{
        type: String,
        default: "/images/profile.png",
    },
    role:{
        type: String,
        enum: ['USER', "ADMIN"],
        default:"USER",
    }
} , { timestamps : true} );


userSchema.pre("save" , function(next){
    const user = this;
    if(!user.isModified("password"))    
        return;
    const salt = 'kgfkutfkhjgfutfhgt';
    const hashedPassword = createHmac('sha256',salt).update(user.password).digest('hex');

    this.salt = salt;
    this.password = hashedPassword;
    next();
});


// adding function to schema
userSchema.static('matchPasswordAndGetToken', async function(email,password){
    const user = await this.findOne({ email });

    if(!user)
        return false;

    const userSalt = user.salt;
    const userPass = user.password;

    const userProvidedPass = createHmac('sha256',userSalt).update(password).digest('hex');

    const token = createToken(user);
    return token;
});


// creating model
const userModel = mongoose.model('User',userSchema);









//Export the model
module.exports = {
    userModel,
}