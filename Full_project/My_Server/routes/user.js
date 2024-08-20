const express = require('express');
const { handleGetBadge } = require('../controllers/badges');


const userRoute = express.Router();


userRoute.get('/achievements' , (req,res) => { return res.json({ name:"skills" }) }  )
.get('/badges' , handleGetBadge )
.get('/skills' , (req,res) => { return res.json({ name:"skills" }) } )
.get('/certifications' , (req,res) => { return res.json({ name:"certifications" }) } )
.get('/projects' , (req,res) => { return res.json({ name:"projects" }) } )
.get('/contacts' , (req,res) => { return res.json({ name:"contacts" }) } );



module.exports = {
    userRoute,
}