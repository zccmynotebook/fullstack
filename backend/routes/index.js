var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('root')
  res.render('index', { title: 'Express',
   dh: "<h1>输出转义的数据到模板，普通数据适合</h1>",
   pzh: "<h1>输出非转义的数据到模板,输出html时适合使用</h1>"
  });
});

module.exports = router;
