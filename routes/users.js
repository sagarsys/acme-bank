const CUSTOMERS = require('../data/customers');

const express = require('express');
const router = express.Router();

const findUser = require('../services/helper');

/* GET users listing. */
router.get('/:id', function (req, res, next) {
    const id = parseInt(req.params.id);
	res.json(findUser(id));
});

router.put('/', function(req, res, next) {

    if (req.body.id) {
        res.json({
            status: 200,
            user: req.body
        });
    }

});

module.exports = router;
