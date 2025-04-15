// dependencies
const router = require('express').Router();
const db = require('../db/index.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authorization = require("../authorization");
const user = require("./users.js");




router.post('/create_project', async (req, res) => {
    const{project_name ,project_description, auth_token} = req.body;
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
            return res.status(500).send({ error: "Project Name Taken or null or too long"});
        }
        //get the ID of the project and link it to the user.

        try{
            const username = "";
            app.runMiddleware('/decode',{method:'post'},function(res,body,req){
                username = res;
            });
            
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
                return res.status(500).send( { error: 'Description too Long'});
            }else{
                await db.query(
                    'UPDATE projects SET description = $1 WHERE id = $2', [project_description, project.id]
                );
            }
            return res.status(200).send("Project Created");
        }catch(error){
            return res.status(500).send({ error: "Project or Username doesnt exist."});
        }
    });

    router.post('/edit_project', async (req, res) => {
        const{project_name, usernames,description, project_pic} = req.body;
        try {
            //get the current data of the project.
            const result = await db.query(
                'SELECT * FROM projects WHERE projectname = $1',
                [project_name]
            );
             // if project does not exist, throw error
            if (result.rowCount === 0) {
                return res.status(401).send( { error: 'Nonexistant project'});
            }
            
            //update profile picture
            if(profile_pic === result.profile_pic){
                    //do nothing if the profile_pic is the same as what is already in the db
            } else{
                await db.query(
                    'UPDATE projects SET profile_pic = $1 WHERE id = $2',[profile_pic,result.id]
                );
            }
            //update description
            if(description === result.description){
                //do nothing if the description is the same as what is already in the db
            } else{
                await db.query(
                    'UPDATE projects SET description = $1 WHERE id = $2',[description,result.id]
                );
            }
            return res.status(200).send("Project updated");
        } catch (error) {
             res.status(500).send({ error: "Editing project failed."});
        }

    });
    router.get('/get_project/:projectname', async (req, res) => {
        const{projectname} = req.params;
        // console.log('Requesting ' + projectname);
        try {
                const result = await db.query(
                    `SELECT * FROM projects WHERE projectname = $1`,
                    [projectname]
                );
        
                if (result.rowCount === 0){
                    return res.status(404).send( { error: 'Nonexistant Project' });
                }
                const project = result.rows[0];
                return res.status(200).send(project);
            } catch (error) {
                res.status(500).send( { error: 'Error fetching Project' });
            }
    });

    router.get('/getall', authorization, async (req, res) => {
        try {
                const result = await db.query("SELECT * FROM projects");
                return res.status(200).send(result.rows);
            } catch (error) {
                res.status(500).send( { error: 'Error fetching Projects' });
            }
    });


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