const express = require('express');
const path = require('path');
const { connectToDB } = require('./connect.js');
const { router } = require('./routes/Staticurl.js');
const { UserRouter } = require('./routes/user.js');
const { UrlRouter } = require('./routes/url.js');
const cookieParser = require('cookie-parser');
const { checkUser } = require('./middleware/auth.js');


// creating express app
const app = express();
const PORT = 8001;


// middle wares
app.use(express.json());
app.use(express.urlencoded({ extended : false }) );
app.use(cookieParser());


// connect to mongodb
connectToDB('mongodb://localhost:27017/Autenticate')
    .then( () => console.log('MongoDB Connected') );


// enable ejs
app.set( 'view engine' , 'ejs' );
app.set('views',path.resolve('./views'));



// routes
app.use('/user',UserRouter);
app.use('/url', checkUser ,UrlRouter);
app.use('/',router);



app.listen(PORT,
    () =>
        console.log("Server started")
);