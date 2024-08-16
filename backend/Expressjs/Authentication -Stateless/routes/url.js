const express = require('express');
const { handleCreateUrl } = require('../contollers/url');
const jwt = require('jsonwebtoken');
const { URLmodel } = require('../models/Url');

const UrlRouter = express.Router();


UrlRouter.post('/', handleCreateUrl );

UrlRouter.get('/:id',
async (req, res) => {
    if (req.params.id != null || req.params.id !== ' ') {
    const urls = await URLmodel.find({ createdBy : req.user._id });
    const redirectURL = await URLmodel.findOne({ ShortID: req.params.id });
    if (redirectURL) { // Check if redirectURL exists
        return res.render('getURL',{ urls: urls , shortId : req.params.id });
    } else {
        // Handle case where no URL found with the given id (e.g., send a 404)
        return res.status(404).send('URL not found');
    }
    }
}
);
  
UrlRouter.get('/',
    (req,res) => {
        return res.render('homePage',{ user : req.user.name });
    }
);

module.exports = {
    UrlRouter,
}