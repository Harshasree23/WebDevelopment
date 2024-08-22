const express = require('express');
const { handleGetBadge } = require('../controllers/badges');
const { handleGetSkill } = require('../controllers/skills');
const { handleGetproject } = require('../controllers/projects');
const { handleGetcertificate } = require('../controllers/certifications');


const userRoute = express.Router();


userRoute.get('/achievements' , (req,res) => { return res.json({ name:"skills" }) }  )
.get('/badges' , handleGetBadge )
.get('/skills' , handleGetSkill )
.get('/certifications' , handleGetcertificate )
.get('/projects' , handleGetproject )
.get('/contacts' , (req,res) => { return res.json({ name:"contacts" }) } );



module.exports = {
    userRoute,
}