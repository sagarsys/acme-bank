const CUSTOMERS = require('../data/customers');

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json(CUSTOMERS);
});

module.exports = router;
