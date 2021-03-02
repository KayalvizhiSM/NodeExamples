var express = require('express');
var router = express.Router();
/* Array Example 1 */
router.get('/test', function (req, res, next) {
    var lengths = ['one', 'two', 'three'];
    var length = ['4', '5', '6'];
    console.log(lengths);
    // res.render('index', {​​​​​​​ title: 'Express' }​​​​​​​);
    res.render('index', { title: length });
  });
  
  /* Array Example 2 */
  router.get('/colors', function (req, res, next) {
    var colors = ["red", "orange", "yellow", "green", "blue"];
    console.log(colors);
    console.log(colors[0]); //should say "red"
    console.log(colors[1]); //should say "orange"
    colors[4] = "purple"
  
    console.log(colors[4]);
    let last_color = colors[colors.length - 1];
  
    //res.render('index', { title: colors.length});
    res.render('index', { title: 'Last color in the array' + last_color });
  });
  /* Array Example 3 : Constructors*/
  router.get('/fruits', function (req, res, next) {
    let fruits = new Array(2);
    var patt1 = '\n';
    fruits = new Array('Apple', 'Banana', 'orange');
  
    res.render('index', { title: fruits });
  });
  
  /* Array Example 4 : prototype*/
  
  // router.get('/Student', function (req, res, next) {
  //   var student = function Student() {
  //     this.name = 'John';
  //     this.gender = 'M';
  //   }
  //   Student.prototype.age = 15;
  
  //   var studObj1 = new Student();
  //   console.log(studObj1.age); 
  
  //   var studObj2 = new Student();
  //   console.log(studObj2.age); 
  //   res.render('index', { title: studObj2 });
  //  });
  // module.exports = student;
  
  /* Array Example 5  : Array Methods : Concat*/
  router.get('/ArrayMethods-Concat', function (req, res, next) {
    const firstArray = ["Java", "C", "C++"]
    const secondArray = ["Python", "Node.Js"]
    const combined = [...firstArray, ...secondArray];
    res.render('index', { title: combined });
  });
  
  /* Array Example 6  : Array Methods : indexOf()*/
  router.get('/ArrayMethods-indexOf', function (req, res, next) {
    const paragraph = 'National Science Day is celebrated every year on February 28. This day recalls the notable invention Raman Effect by India s greatest scientist C V Raman. He was awarded the Nobel Prize for this discovery. Since that day, February 28 is being commemorated as National Science Day to recall the great discovery of CV Raman.';
    const searchTerm = 'Raman';
    const indexOfFirst = paragraph.indexOf(searchTerm);
    let indexSecond = paragraph.indexOf(searchTerm, (indexOfFirst + 1));
  
    console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
  
    console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
    res.render('index', { title: 'Result => 1: ' + indexOfFirst + ',\n 2 : ' + indexSecond });
  
  });
  /* Array Example 7  : Array Methods : join()*/
  router.get('/ArrayMethods-join', function (req, res, next) {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var result = fruits.join(" * ");
    res.render('index', { title: 'Input :' + fruits + '::::Result : ' + result });
  });
  /* Array Example 8  : Array Methods : lastIndexOf()*/
  router.get('/ArrayMethods-lastIndexOf', function (req, res, next) {
    var bufferStorage = Buffer.from('We learn little from victory, but a great deal from defeat');
  
  
    console.log('lastIndexOf' + bufferStorage.lastIndexOf('d'));
    console.log('lastIndexOf with param' + bufferStorage.lastIndexOf('v', 100, 'utf8'));
    // Class: Buffer
    const base64buf = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');
    const utfbuf = Buffer.alloc(40, 'aGVsbG8gd29ybGQaGVsbG8gd29ybGQ=sdfcssdds', 'base64');
    console.log(base64buf);
    console.log(utfbuf);
  
    res.render('index', { title: utfbuf });
  });
  /* Array Example 9  : Array Methods : pop()*/
  router.get('/ArrayMethods-pop', function (req, res, next) {
    const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
    console.log(plants.pop());
    console.log(plants);
    plants.pop();
    console.log(plants);
    res.render('index', { title: plants });
  });
  /* Array Example 10  : Array Methods : push()*/
  router.get('/ArrayMethods-push', function (req, res, next) {
    const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
    const count = plants.push('bitterguard');
    console.log(count);
    console.log(plants);
    plants.push('ringguard', 'ladies finger');
    console.log(plants);
    /* iteration within Array*/
    plants.forEach(function (item, index) {
      console.log(item, index);
    });
    res.render('index', { title: plants });
  });
  
  /* Array Example 11  : Array Methods : reverse()*/
  router.get('/ArrayMethods-reverse', function (req, res, next) {
    const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
    const rev = plants.reverse();
    // const reverse = plants.prototype.reverse();
    console.log(rev);
  });
  
  /* Array Example 12  : Array Methods : slice()  sort*/
  router.get('/ArrayMethods-slice', function (req, res, next) {
    const plants = ['zomo','broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
    const rev = plants.slice(2,4);
    const sorted = plants.sort();
    console.log(rev);
    console.log(sorted);
    res.render('index', { title: rev});
  });
  /* Array Example 13  : Array Methods : splice()*/
  // array.splice(index, howmany, item1, ....., itemX)
  router.get('/ArrayMethods-splice', function (req, res, next) {
    const plants = ['zomo','broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
    const splicer = plants.splice(1,2,'brinjal','potato');
    console.log(plants);
    res.render('index', { title: plants});
  });
  
  /* Array Example 14  : Array Methods : toString()*/
  router.get('/ArrayMethods-toString', function (req, res, next) {
  function Example(name) {
    this.name = name;
  }
  Example.prototype.age = 15;
  const exampleObj = new Example('SweetName');
  console.log(exampleObj.age);
  
  Example.prototype.toString = function exampleToString() {
    return `${this.name}`+'-'+`${this.age}`;
  };
  console.log(exampleObj.toString());
  res.render('index', { title: exampleObj.toString()});
  });
  /* Array Example 15  : Array Methods : unshift()*/
  router.get('/ArrayMethods-unshift', function (req, res, next) {
    const plants = ['zomo','broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
    plants.unshift('mashroom','lemon');
  
    console.log(plants);
  res.render('index', { title:plants});
  });
  
  /* Array Example 16  : Array Methods : valueOf()*/
  router.get('/ArrayMethods-valueOf', function (req, res, next) {

    function Square(n){
        this.number = n*n;
    }

    Square.prototype.valueOf=function(){
        return this.number;
    }
    const value = 12;
    assert.strictEqual(50, "50");
    const obj = new Square(120);

    console.log(obj);

    res.render('index', { title:  'Square Root of ==>'+obj});
  });
  module.exports = router;