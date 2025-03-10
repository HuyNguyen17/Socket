// dependencies
const router = require('express').Router();
const db = require('../db/index.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authorization = require("../authorization");


router.post('/create_project', async (req, res) => {
    const{project_name, username,project_description} = req.body;
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
        //get the ID of the project and link it to the user.
        try{
            const results = await db.query(
                        'SELECT * FROM users WHERE username = $1',
                        [username]
                    );
            // if username does not exist, throw error
            if (results.rowCount === 0) {
                return res.status(401).send( { error: 'Nonexistant User'});
            }
            const user = results.rows[0];

            const projres = await db.query(
                'SELECT * FROM projects WHERE projectname = $1',
                [project_name]
            );

            // if project name does not exist, throw error
            if (results.rowCount === 0) {
                return res.status(401).send( { error: 'Nonexistant project'});
             }
            const project = projres.rows[0];

            await db.query(
                'INSERT INTO link_projects (user_id,project_id) VALUES($1,$2)' , [user.id ,project.id] 
            );
            if(description.length > 5000){
                return res.status(401).send( { error: 'Description too Long'});
            }
            await db.query(
                'UPDATE projects SET description = $1 WHERE id = $2', [project_description, project.id]
            );

        }catch(error){
            res.status(500).send({ error: "Project or Username doesnt exist."});
        }
    });
module.exports = router;