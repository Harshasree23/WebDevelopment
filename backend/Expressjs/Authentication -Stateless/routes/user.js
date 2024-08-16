const express = require('express');
const { userModel } = require('../models/user');
const { setUser } = require('../service/map');

const UserRouter = express.Router();

UserRouter.get('/signUp',
    (req,res) => {
      return res.render('signUp');
    }
);

UserRouter.post('/signUp',
    async (req,res) =>
    {
        const { name,email,password } = req.body;

        // check if already exist
        const find = await userModel.findOne({ email:email });
        if(find)
            return res.redirect(301,'/user/logIn?msg=user+already+exist+please+logIn');

        await userModel.create({
            name:name,
            email:email,
            password:password,
        });

        return res.redirect(301,'/user/login');
    }
);

UserRouter.get('/login',
    (req,res) => {
      return res.render('login',{ msg : req.query.msg });
    }
);

UserRouter.post('/login',
    async (req,res) => {
        const { email,password } = req.body;

        const checkUser = await userModel.findOne( { email:email } );
       
        if(checkUser)
        {
            if(checkUser.password == password)
            {
                const token = setUser( checkUser );
                res.cookie('uid',token);
                return res.redirect(301,`/url`);
            }
            return res.render('login',{ msg: "wrong password try again" });
        }
        return res.render('login',{ msg: "No such mail exist please Sign Up" });
    }
);


module.exports = {
    UserRouter,
}