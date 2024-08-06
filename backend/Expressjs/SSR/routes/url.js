const express = require('express');
const shortId = require('short-id');
const { URL } = require('../models/url');

const route = express.Router();
const route2 = express.Router();

route.post('/', 
    async (req,res)  => {
        const id = shortId.generate();

        if( await URL.findOne({ "fullURL" :  `${req.body.url}` }) != null )
            return res.json({
                error : "no duplicate keys",
        });

        const response = await URL.create({
            shortURL : id ,
            fullURL : req.body.url ,
            history : [],
        });
        return res.status(201).json({
            success : `created id -> ${id}`,
        })
    }
);

route.get('/:id', 
    async (req,res) => {
        const response = await URL.findOne({ "shortURL" :  `${req.params.id}` });
        console.log(response);
        return res.json({
            clicked : `${response.history.length}`,
            history : `${response.history}`,
        });
    }
);

module.exports = {
    route,route2,
}