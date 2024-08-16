const jwt = require('jsonwebtoken');
const secretKey = "$@cr@t K@^|";

const setUser = ( user ) =>{
    return jwt.sign( {
        _id : user._id,
        email : user.email,
        name : user.name,
    },secretKey );
}

const getUser = (tocken) => {
    if(!tocken) 
        return null;
    try{
        return jwt.verify(tocken,secretKey);
    }
    catch(err){   
        return null;
    }
    
}

module.exports = {
    setUser,
    getUser,
}