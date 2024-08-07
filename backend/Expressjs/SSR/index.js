// imports
const express = require('express');
const path = require('path');
const { connect } = require('mongoose');
const { route, route2 } = require('./routes/url');
const { URL } = require('./models/url');
const { staticroute } = require('./routes/static');

// creating app
const app = express();
const PORT = 8001;


// connecting to DB
connect('mongodb://localhost:27017/ssr').then(
    () => console.log('MongoDB Connected')
);



app.set('view engine','ejs');
app.set('views',path.resolve('./views'));

// middle ware
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.use('/url',route);
app.use('/analysis/:id',
    async (req,res) => {
        const response  = await URL.findOne({ "shortURL" : `${req.params.id}` });
        console.log(response);
        res.json({
            clicks : response.history.length,
            history : response.history,
        });
    }
);
app.use('/',staticroute);




// starting server
app.listen(
    PORT,
    () => { console.log(`Server started at port: ${PORT}`) }
);