var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(res)
  res.render('index', { title: 'Express' });
});

router.get('/:user_name', function(req, res, next) {
  console.log(req.params)
  res.render('index', { title: req.params['user_name'] } );

});

module.exports = router;
