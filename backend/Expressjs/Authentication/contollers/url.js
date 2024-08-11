const { URLmodel } = require('../models/Url');
const ShortID = require('short-id');

const handleCreateUrl = async (req, res) => {
    const url = req.body.FullUrl;

    try {
        // if empty url
        const user = req.query.name;
        if ( url.trim() === "" || url == null)
            return res.render('homepage', { user : user, urls: await URLmodel.find({}), msg: 'Enter a valid URL.' });

        // Check if URL already exists
        const existingUrl = await URLmodel.findOne({ FullUrl: url });
        if (existingUrl) 
            return res.render('homepage', { user : user, urls: await URLmodel.find({}), msg: 'URL already present..' });

        const id = ShortID.generate();
        const newUrl = await URLmodel.create({
            FullUrl: url,
            ShortID: id,
            history: [],
            createdBy: req.user._id,
        });

        res.status(200);
        return res.redirect(301, `/url/${id}`);
    } 
    catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    handleCreateUrl,
};
