// middleware to make sure a user is authorized -- parts of code taken from NTurner20 Github pern-login-JWT
require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = async(req,res,next) => {
    try {
        const jwtToken = req.header("token");

        if(!jwtToken){
            return res.status(401).send( { error: 'Not Authorized'});
        }
        const payload = jwt.verify(jwtToken, process.env.JWT_SECRET);

        req.user = payload.user;
        next();
    } catch (error) {
        return res.status(401).send( { error: 'Not Authorized'});
    }
}