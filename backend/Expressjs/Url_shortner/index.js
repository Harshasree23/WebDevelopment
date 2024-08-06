const express = require('express');
const { route } = require('./routes/url');
const { connect } = require('./mongoose');
const { URL } = require('./models/url');

const app = express();
const PORT = 8001;

connect('mongodb://localhost:27017/url-shortner').then( () => { console.log("mongoDB connected") } );

app.use(express.json());

app.use('/url',route);

app.get('/:shortId', async (req,res) => {
    const shortId = req.params.shortId;
    console.log(shortId);
    const entry = await URL.findOneAndUpdate(
    {
        shortId,   
    },
    {
        $push: {
            history : { 
                timestamp: Date.now() 
            }
        },
    });
    return res.redirect(entry.redirectURL);
} );


app.get('/analyse/:shortId' , async(req,res) => {
    const shortId = req.params.shortId;
    const result = await URL.findOne( {shortId} );
    return res.json({
        clicks : result.history.length,
        times : result.history,
    })
} )


app.listen(PORT, ()=> { console.log(`server started at port : ${PORT}`) });