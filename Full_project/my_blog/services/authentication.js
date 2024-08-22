const JWT = require('jsonwebtoken');

const { secret } = require('../config.json');


function createToken(user)
{
    const payload = {
        _id : user._id,
        email : user.email,
        profile: user.profile,
        role: user.role,
    };

    const token = JWT.sign(payload , secret);

    return token;
}


function validateToken(token)
{
    const payload = JWT.verify(token,secret);
    return payload;
}

module.exports = {
    validateToken,
    createToken,
}