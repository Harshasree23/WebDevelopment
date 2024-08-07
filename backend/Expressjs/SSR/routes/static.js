const express = require('express');
const { URL } = require('../models/url');

const staticroute = express.Router();

staticroute.get('/',
   async  (req,res) => {
        const url = await URL.find({});
        return res.render('details',{
            url:url,
        });
    }
);

module.exports = {
    staticroute,
}