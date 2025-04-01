const router = require('express').Router();
const db = require('../db/index.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authorization = require("../authorization");


router.post('/create_organization', async (req, res) => {
    const{organization_name, organization_description, project_pic, auth_token} = req.body;
    if(!organization_name){
        return res.status(400).send({ error: "Organization needs to have a name."});
    }
    try{
        await db.query(
                        'INSERT INTO organizations (organization_name) VALUES($1)' , [organization_name] 
        );
        res.status(201).send({ message: 'organization created'});

        const org = await db.query(
            'SELECT * FROM organizations WHERE organization_name = $1',
            [organization_name]
        )
        const user_name = "";
        app.runMiddleware('/decode',{method:'post'},function(res,body,req){
            user_name = res;
        });
        const results = await db.query(
            'SELECT * FROM users WHERE username = $1',
            [user_name]
        );

        await db.query(
            'INSERT INTO link_organizations (org_id, user_id) VALUES($1,$2)',[org.org_id,results.id]
        );

    }catch(error){
        res.status(500).send({ error: "Organization Name Taken"});
    }


});

router.post('/adduser_to_org', async (req, res) => {
    const{organization_name, auth_token, username} = req.body;
    try {
        const org = await db.query(
            'SELECT * FROM organizations WHERE organization_name = $1',
            [organization_name]
        )

        const user = [];
        app.runMiddleware('/getuser/:username',{method:'post'},function(res,body,req){
            user = res;
        });

        await db.query(
            'INSERT INTO link_organizations (org_id, user_id) VALUES($1,$2)',[org.org_id,user.id]
        );

    } catch (error) {
        res.status(500).send({ error: "Organization Name Taken"});
    }
    });


module.exports = router;