const express = require('express');
const { URLmodel } = require('../models/Url');

const router = express.Router();

router.get('/',
    async (req,res) => {
        const user = req.query.name;
        return res.render('homePage',{user : user});
    }
);

router.get('/:id',
  async (req,res) => {
      const redirectURL = await URLmodel.findOne({ ShortID: req.params.id });
      console.log(redirectURL);
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