const express = require('express');
const router = express.Router();

const findUser = require('../services/helper');

router.post('/', function (req, res, next) {
	// double check that request params have been supplied
	if (req.body && req.body.email && req.body.password) {
		const user = findUser(null, req.body.email);
		// user exists
		if (user && user.length) {
			// passwords match
			if (user[0].password === req.body.password) {
				res.json({
					status: 200,
					message: 'OK',
					user: user[0],
				})
			}
			// wrong password
			else {
				res.json({
					status: 401,
					message: 'Email and password do not match!',
					user: {}
				})
			}
		}
		// user does not exist
		else {
			res.json({
				status: 404,
				message: 'User does not exist',
				user: {}
			})
		}
	}
	// request does not contain required params
	else {
		res.json({
			status: 400,
			message: 'Email and/or password are mandatory',
			user: {}
		});

	}
});

module.exports = router;
