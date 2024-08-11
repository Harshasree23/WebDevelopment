const { getUser } = require("../service/map");

const checkUser = async(req,res,next) => {
    const id = req.cookies?.uid;
    if(!id)
        return res.redirect(301,"/user/login?msg=login+to+continue");
    
    const user = getUser(id);
    req.user = user;
    if(!user)
        return res.redirect(301,"/user/login?msg=user+not+found+login+again");
    next();
}


module.exports ={
    checkUser,
}
