const CUSTOMERS = require('../data/customers');

const express = require('express');
const router = express.Router();

const findUser = require('../services/helper');

/* GET user details by id  */
router.get('/:id', function (req, res, next) {
	const id = req.params.id && parseInt(req.params.id);
	const user = findUser(id);
	if (!id) {
		return res.json({
			status: 400,
			message: `Param id is required`
		})
	}
	if (user.length) {
		return res.json({
			status: 200,
			user,
			message: 'User found'
		});
	}
	res.json({
		status: 404,
		message: `No user found with id '${id}'`
	})
});

/* Update user details */
router.put('/', function(req, res, next) {
    const id = parseInt(req.body.id, 10);
    if (id) {
        const user = findUser(id);
        if (!user.length) {
        	return res.json({
		       status: 404,
		       message: `No user found with id '${id}'`,
		        user: req.body
	        });
        }
        const updatedUser = Object.assign({}, user[0], req.body);
        return res.json({
            status: 200,
            user: updatedUser,
	        message: 'User details updated successfully'
        });
    }
    else {
    	res.json({
		    status: 400,
		    message: 'Required params missing',
		    user: req.body
	    })
    }
});

module.exports = router;
