const express = require('express');
const { handleGetApiBadge, handlePostApiBadge } = require('../controllers/badges');


const apiRoute = express.Router();


apiRoute.get('/achievements' , (req,res) => { return res.json({ name:"skills" }) }  )
.get('/badges' , handleGetApiBadge )
.get('/skills' , (req,res) => { return res.json({ name:"skills" }) } )
.get('/certifications' , (req,res) => { return res.json({ name:"certifications" }) } )
.get('/projects' , (req,res) => { return res.json({ name:"projects" }) } )
.get('/contacts' , (req,res) => { return res.json({ name:"contacts" }) } )
.post('/badges' , handlePostApiBadge);

module.exports = {
    apiRoute,
}