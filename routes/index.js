var express = require('express');
var router = express.Router();
var UserModel= require('./bdd');



/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index',{title: 'Save Heroes' })
});

router.get('/inscription', function (req, res, next) {
  res.render('inscription', {title: 'Save Heroes', lastName:"", firstName:"", age:"", action:"load" })
})

router.post('/inscription', async function (req, res, next) {
  var newUser = new UserModel ({
    lastName: req.body.lastName,
    firstName: req.body.firstName,
    age: req.body.age 
   });
   var user = await newUser.save();
   var users = await UserModel.find();
  res.render('inscription', {title: 'Save Heroes', lastName:req.body.lastName, firstName:req.body.firstName, age:req.body.age, action:"save", user: await newUser.save(), users: await UserModel.find() })
})

module.exports = router;
