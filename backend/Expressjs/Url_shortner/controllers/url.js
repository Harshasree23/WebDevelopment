const shortId = require('short-id');

const { URL } = require('../models/url');

const handleShortId = async (req,res) => {
    const body = req.body;
    if(!body.url)
        return res.status(400).json({ require:"need an url" ,
                            error: "please enter a url" });
    
    const id = shortId.generate();
    await URL.create({
        shortId : id,
        redirectURL : body.url,
        history: [],
    });

    return res.json({ id_generated : id });
};

module.exports = {
    handleShortId,
}