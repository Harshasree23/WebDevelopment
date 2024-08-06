const express = require('express');
const { handleShortId } = require('../controllers/url');

const route = express.Router();

route.post('/',handleShortId);


module.exports = {
    route,
}