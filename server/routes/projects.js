// dependencies
const router = require('express').Router();
const db = require('../db/index.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authorization = require("../authorization");




router.post('/create_project', async (req, res) => {
    const{project_name, username} = req.body;
        if(!project_name){
            return res.status(400).send({ error: "Project needs to have a name."});

        }
        try{
            await db.query(
                'INSERT INTO projects (projectname) VALUES($1)' , [project_name] 
            );
            res.status(201).send({ message: 'Project created'});
        }
        catch(error){
            res.status(500).send({ error: "Project Name Taken or null or too long"});
        }

        try{
            await db.query(
                'UPDATE projects SET WHERE VALUES($1,)' , [project_name] 
            );
            res.status(201).send({ message: 'Project created'});
        }
        catch(error){
            res.status(500).send({ error: "Project Name Taken or null or too long"});
        }

});









module.exports = router;