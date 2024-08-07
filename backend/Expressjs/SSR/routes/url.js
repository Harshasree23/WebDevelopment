const express = require('express');
const shortId = require('short-id');
const { URL } = require('../models/url');

const route = express.Router();
const route2 = express.Router();

route.post('/', 
    async (req,res)  => {
        const id = shortId.generate();


        const response = await URL.create({
            shortURL : id ,
            fullURL : req.body.url ,
            history : [],
        });

        const url = await URL.find({});
        res.render('details',{
            id:id,
            url:url,
        });
    }
);

route.get('/:id', 
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

module.exports = {
    route,route2,
}