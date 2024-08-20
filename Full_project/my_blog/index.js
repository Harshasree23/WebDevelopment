const express = require('express');
const path = require('path');
const { userRoute } = require('./routes/user');
const { connectToDb } = require('./connections');


// Creating a basic app
const app = express();
const PORT = 8001;


// connecting to mongoDb
connectToDb('Blog-User').then( console.log("Connected to DB") );


// Middlewares
app.set('view engine','ejs');
app.set('views',path.resolve("./views")); 
app.use(express.urlencoded({ extended : false }));


// routes
app.use('/user', userRoute);


// Starting the server
app.listen(PORT, () => {
    console.log(`Server strarted at Port : ${PORT}`);
})