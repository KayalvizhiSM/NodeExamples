var express = require('express');
var router = express.Router();
/* Array Example 1 */
router.get('/MathFunc', function (req, res, next) {
    var lengths = ['one', 'two', 'three'];
    var length = ['4', '5', '6'];
    console.log(lengths);
    // res.render('index', {​​​​​​​ title: 'Express' }​​​​​​​);
    res.render('index', { title: length });
  });
  
  module.exports = router;