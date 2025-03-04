// dependencies
require('dotenv').config();
const express = require('express');

// create an express instance
const app = express();
app.use(express.json());

// use route files
app.use("/api/users", require("./routes/users"));
app.use("/api/projects", require("./routes/projects"));

// set port using .env; if no value is defined, set to 3001
const PORT = process.env.PORT || 3001;

// running 
app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`);
});