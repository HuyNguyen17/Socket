// dependencies
const router = require('express').Router();
const db = require('../db/index.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authorization = require("../authorization.js");


// create an account 
router.post('/create_post', async (req, res) => {
    

});



module.exports = router;