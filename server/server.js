// dependencies
require("dotenv").config();
const bcrypt = require('bcrypt');
const express = require("express");

// initialize encryption 
const saltRounds = 7;

// talk to the database 
const db = require("./db");

// create an express instance
const app = express();
app.use(express.json());

// Hardcoded test users and their get requests
const testUsers = [
    { username: "testuser", email: "testuser@example.com" },
    { username: "john_doe", email: "john.doe@example.com" },
];

app.get("/api/users", (req, res) => {
    res.json(testUsers.map(user => ({ username: user.username })));
});

app.get("/api/users/:username", (req, res) => {
    const testUsers = [
        { username: "testuser", email: "testuser@example.com" },
        { username: "john_doe", email: "john.doe@example.com" }
    ];
    const user = testUsers.find(u => u.username === req.params.username);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: "User not found" });
    }
});


// create an account 
app.post("/api/signup", async (req, res) => {
    const {username, password, email} = req.body;
    //console.log(req.body); //uncomment to see what is being passed in
    try{
        const hashPassword = await bcrypt.hash(password, saltRounds);
        //console.log(hashPassword); //uncomment to see hashed password 
        await db.query(
            'INSERT INTO users (username, password, email) VALUES ($1, $2, $3)', [username, hashPassword, email]
        );
        res.status(201).send({ message: 'Signup Succesful'});
    } catch (error) {
        res.status(500).send({ error: "Signup Failed: Username taken or empty password/email field"});
    }
});

// login to account (incomplete)
app.get("/api/login", async (req, res) => {
    res.json({
        status: "sucess",
        user: "test user",
    })
});

// set port using .env; if no value is defined, set to 3001
const PORT = process.env.PORT || 3001;

// running 
app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`);
});