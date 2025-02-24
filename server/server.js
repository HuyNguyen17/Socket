// dependencies
const express = require("express");
const cors = require("cors")

//use cors to communicate with the frontend
const app = express();
app.use(cors()); 
app.use(express.json());

const PORT = 3701;

//TODO: Have postgres actually set up

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`);
})