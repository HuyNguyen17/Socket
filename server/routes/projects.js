// dependencies
const router = require('express').Router();
const db = require('../db/index.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authorization = require("../authorization");

router.post('/submit', async (req, res) => {
    const {project_name, project_description} = req.body;
    if (!project_name || !project_description) {
        return res.status(400).send({ error: "All fields required."});
    }
    //console.log(req.body); //uncomment to see what is being passed in
    try{
        //console.log(hashPassword); //uncomment to see hashed password 
        await db.query('INSERT INTO projects (projectname, description) VALUES ($1, $2)', [project_name, project_description]);
        res.status(201).send({ message: 'Submission succesful'});
    } catch (error) {
        res.status(500).send({ error: "Submission failed, empty field."});
    }
});

module.exports = router;