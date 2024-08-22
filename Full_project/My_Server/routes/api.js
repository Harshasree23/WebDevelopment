const express = require('express');
const { handleGetApiBadge, handlePostApiBadge } = require('../controllers/badges');
const { handleGetApiSkill, handlePostApiSkill } = require('../controllers/skills');
const { handleGetApiproject, handlePostApiproject } = require('../controllers/projects');
const { handleGetApicertificate, handlePostApicertificate } = require('../controllers/certifications');
const { handleGetApicontact, handlePostApicontact } = require('../controllers/contacts');


const apiRoute = express.Router();


apiRoute.get('/achievements' , (req,res) => { return res.json({ name:"skills" }) }  )
        .get('/badges' , handleGetApiBadge )
        .get('/skills' , handleGetApiSkill )
        .get('/certifications' , handleGetApicertificate )
        .get('/projects' , handleGetApiproject )
        .get('/contacts' , handleGetApicontact )
        .post('/contacts', handlePostApicontact )
        .post('/certifications', handlePostApicertificate)
        .post('/badges' , handlePostApiBadge)
        .post('/skills', handlePostApiSkill )
        .post('/projects', handlePostApiproject);
        
module.exports = {
    apiRoute,
}