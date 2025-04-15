// dependencies
const router = require('express').Router();
const db = require('../db/index.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authorization = require("../authorization");

// initialize encryption 
const saltRounds = 7;

// create an account 
router.post('/signup', async (req, res) => {
    const {username, password, email} = req.body;
    if (!username || !password || !email) {
        return res.status(400).send({ error: "All fields required."});
    }
    if (email.indexOf("@ufl.edu") === -1){
        console.log(email.indexOf("@ufl.edu"));
        return res.status(505).send({ error: 'Only UFL emails allowed'});
     }

    //console.log(req.body); //uncomment to see what is being passed in
    try{
        //console.log(email.indexOf("@ufl.edu"));
        const hashPassword = await bcrypt.hash(password, saltRounds);
        //console.log(hashPassword); //uncomment to see hashed password 
            console.log("This second if statement works");
            await db.query(
                'INSERT INTO users (username, password, email) VALUES ($1, $2, $3)', [username, hashPassword, email]
            );
            res.status(201).send({ message: 'Signup Succesful'});
        
        
    } catch (error) {
        res.status(500).send({ error: "Signup Failed: Username/email taken or empty field"});
    }
});

// login to account (some code from: Building a Robust User Authentication System with the PERN Stack by amit kumar) 
router.post('/login', async (req, res) => {
    const {username, password} = req.body;
    //console.log(req.body); //uncomment to see what is being passed in 
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
        const isMatch = await bcrypt.compare(password, user.password);

        // if password does not match, throw error 
        if (!isMatch) {
            return res.status(401).send( { error: 'Incorrect Password'});
        }

        // use JWT token
        const token = jwt.sign({ username: user.username}, 'JWT_SECRET', { expiresIn: '2h' });
        res.send({ token });    

    } catch (error) {
        res.status(500).send({ error: "Login Failed"});
    } 
});

// read user data
router.get('/getuser/:username', authorization, async (req, res) => {
    const {username} = req.params;
    try {
        const result = await db.query(
            `SELECT * FROM users WHERE username = $1`,
            [username]
        );

        if (result.rowCount === 0){
            return res.status(404).send( { error: 'Nonexistant User' });
        }
        const user = result.rows[0];
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send( { error: 'Error fetching user profile' });
    }
});

// decode JWT to get username
router.get('/decode', authorization, async (req, res) => {
    try {
        res.send(req.user);
    } catch (error) {
        res.status(500).send( { error: 'Error fetching username' });
    } 
});

// edit account info (incomplete)
router.put('/edit', authorization, async (req, res) => {
    const{linkedin, major, year, description} = req.body;
    try{
        const result = await db.query(
            `SELECT * FROM users WHERE username = $1`,[req.user]
        );
        const user_id = result.rows[0].id

        //update the linkedin of the user
        if(linkedin === result.rows[0].linkedin){
            //do nothing if the linked in is the same as what is already in the db
        } else{
            await db.query(
                'UPDATE users SET linkedin = $1 WHERE id = $2',[linkedin,user_id]
            );
        }
        
        //update major
        if(major === result.rows[0].major){
            //do nothing if the major is the same as what is already in the db
        } else{
            await db.query(
                'UPDATE users SET major = $1 WHERE id = $2',[major,user_id]
            );
        }
        
         //update year
         if(year === result.rows[0].year){
            //do nothing if the year is the same as what is already in the db
        } else{
            await db.query(
                'UPDATE users SET year = $1 WHERE id = $2',[year,user_id]
            );
        }
        
         //update description
         if(description === result.rows[0].description){
            //do nothing if the description is the same as what is already in the db
        } else{
            await db.query(
                'UPDATE users SET description = $1 WHERE id = $2',[description,user_id]
            );
        }
        res.status(200).send(req.user);
        //console.log("MADE IT BRO");
    } catch(error){
        //console.log("YO ERROR MATE");
        res.status(500).send({ error: "Editing user profile failed."});
    }
});

module.exports = router;