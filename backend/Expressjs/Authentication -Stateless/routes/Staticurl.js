const express = require('express');
const jwt = require('jsonwebtoken');
const { getUser } = require("../service/map");
const { URLmodel } = require('../models/Url');

const router = express.Router();

router.get('/',
    async (req,res) => {
        const token = req.cookies.uid;
        if(token)
        {
          const user = getUser(token);
          req.user = user;
          return res.render('homePage',{user : req.user.name});
        }
        else
          return res.render('homePage');
        
    }
);

router.get('/:id',
  async (req,res) => {
      const redirectURL = await URLmodel.findOne({ ShortID: req.params.id });
      await URLmodel.findOneAndUpdate(
        { ShortID: req.params.id },
        { $push: { history: { timestamp: Date.now() } } } // Update history
      );
      return res.redirect( redirectURL.FullUrl );
  }
)
module.exports = {
    router,
};