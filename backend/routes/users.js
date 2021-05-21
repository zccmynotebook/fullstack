var express = require('express');
var router = express.Router();
let {sigin}=require('../controller/users')
/* GET users listing. */
router.get('/', sigin);

module.exports = router;
