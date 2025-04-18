// dependencies
const router = require('express').Router();
const db = require('../db/index.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authorization = require("../authorization");
const user = require("./users.js");

router.post('/create_project', async (req, res) => {
    const{project_name, project_description} = req.body;
        if(!project_name){
            return res.status(400).send({ error: "Project needs to have a name."});

        }
        try{
            await db.query(
                'INSERT INTO projects (projectname) VALUES($1)' , [project_name] 
            );
        }
        catch(error){
            return res.status(500).send({ error: "Project Name Taken or null or too long"});
        }
        //get the ID of the project and link it to the user.

        console.log("Logging id");
        try{
            const username = jwt.decode(req.headers.authorization).username;

            console.log("Username: %s", username);
            
            const results = await db.query(
                        'SELECT * FROM users WHERE username = $1',
                        [username]
                    );
            // if username does not exist, throw error
            if (results.rowCount === 0) {
                console.log(username + " does not exist");
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
                'INSERT INTO link_projects (user_id,proj_id) VALUES($1,$2)' , [user.id ,project.id] 
            );

            if(project_description.length > 5000){
                return res.status(500).send( { error: 'Description too Long'});
            }else{
                console.log("Adding description", project_description);
                await db.query(
                    'UPDATE projects SET description = $1 WHERE id = $2', [project_description, project.id]
                );
            }
            console.log("Project %s Created", project_name);
            return res.status(200).send("Project Created");
        }catch(error){
            console.log(error);
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
            if(profile_pic === result.rows[0].profile_pic){
                    //do nothing if the profile_pic is the same as what is already in the db
            } else{
                await db.query(
                    'UPDATE projects SET profile_pic = $1 WHERE id = $2',[profile_pic,result.id]
                );
            }
            //update description
            if(description === result.rows[0].description){
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
                let project = result.rows[0];

                
                const result2 = await db.query(
                    `SELECT * FROM link_projects WHERE proj_id = $1`,
                    [result.rows[0].id]
                );
                
            
                const result3 = await db.query(
                    'SELECT * FROM users WHERE id = $1', [result2.rows[0].user_id]
                );
                
                //console.log(result3.rows[0].username);

                
                project.username = result3.rows[0].username;
                




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

module.exports = router;