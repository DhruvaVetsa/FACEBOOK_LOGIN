var express = require('express');
var router = express.Router();

const index_contoller = require('../controller/index_contoller');
const { generalErr } = require("../controller/err_contoller");

/* GET home page. */
router.get('/', index_contoller.getIndex);

module.exports = router;
