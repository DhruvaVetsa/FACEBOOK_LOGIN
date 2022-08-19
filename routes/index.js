var express = require('express');
var router = express.Router();

const index_contoller = require('../controller/index_contoller');
const { generalErr } = require("../controller/err_contoller");

router.get('/', index_contoller.getHome);
router.get('/signup', index_contoller.getRegistration);
router.get('/signin', index_contoller.getLogin);
router.get('/profile/:userID', index_contoller.getProfile);

module.exports = router;
