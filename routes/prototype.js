var express = require('express');
var router = express.Router();

router.get('/Student', function (req, res, next) {
   function Student() {
      this.name = 'John';
      this.gender = 'M';
    }
    Student.prototype.age = 15;
   
    var studObj1 = new Student();
    console.log(studObj1.age); 
   
    var studObj2 = new Student();
    console.log(studObj2.age); 
    res.send({ title: studObj2 });
   });
   module.exports = router;
