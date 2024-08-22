const express = require('express');
const { userModel } = require('../models/users');


const userRoute = express.Router();


userRoute.get('/',
    (req,res) => {
        return res.render('home');
    }
);

userRoute.get('/signUp',
    (req,res) => {
        return res.render('signup');
    }
);

userRoute.get("/signin", 
    (req,res) => {
        res.render('signin');
    }
)


userRoute.post('/signin',
    async (req,res) => {
        const { email,password } = req.body;
        try{
            const token = await userModel.matchPasswordAndGetToken( email , password );
            return res.cookie('token',token).redirect('/user');
        }
        catch(err)
        {
            res.render('signin',{ error : 'Incorrect email or password' });
        }
    }
);


userRoute.post('/signup',
    async (req,res) => {
        const {firstName , lastName , email , password} = req.body;
        await userModel.create({
            firstName,
            lastName,
            email,
            password,
        });
        
        return res.redirect('/user');
    }
);



module.exports = {
    userRoute,
}