const express = require('express');
const router = express.Router();
const findUser = require('../services/helper');

router.post('/', function(req, resp, next) {
    // double check that request params have been supplied
    if (req.body && req.body.email && req.body.password) {
        const user = findUser(null, req.body.email);
        // user exists
        if (user) {
            // passwords match
            if (user[0].password === req.body.password) {
                resp.json({
                    status: 200,
                    user: user[0]
                })
            }
            // wrong password
            else {
                resp.json({
                    status: 400,
                    message: 'Email and password do not match!'
                })
            }
        }
        // user does not exist
        else {
            resp.json({
                status: 400,
                message: 'User does not exist'
            })
        }
    }
    // request does not contain required params
    else {
        resp.json({
            status: 400,
            message: 'Email and/or password are mandatory'
        });

    }
});

module.exports = router;
