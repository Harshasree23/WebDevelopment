// imports
const express = require('express');
const { connect } = require('mongoose');
const { route, route2 } = require('./routes/url');
const { URL } = require('./models/url')

// creating app
const app = express();
const PORT = 8001;


// connecting to DB
connect('mongodb://localhost:27017/ssr').then(
    () => console.log('MongoDB Connected')
);

// middle ware
app.use(express.json());

app.use('/url',route);

app.use('/analysis',route);

app.use('/:id',
    async (req,res) => {
        console.log(req.params);
        const fullURL = await URL.findOne( { "shortURL" : `${req.params.id}` } );
        if( fullURL == null )
            return res.json({
                error : "no such URL is present",
        });

        await URL.findOneAndUpdate(
            {
                shortURL : req.params.id,
            },
            {
                $push : {
                history : {
                    timestamps : Date.now()
                    },
                },
            }
        );

        return res.json({
            success : `required URL -> ${fullURL.fullURL}`,
        })
    }
);

// starting server
app.listen(
    PORT,
    () => { console.log(`Server started at port: ${PORT}`) }
);