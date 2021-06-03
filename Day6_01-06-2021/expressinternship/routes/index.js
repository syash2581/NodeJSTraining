var express = require('express');
var router = express.Router();


router.get('/master', function(req, res, next) {
  res.render('master', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/myform', function(req, res, next) {
  res.render('form', { title: 'Express' });
});

router.post('/form-process', function(req, res, next) {
  var num1 = parseInt(req.body.txt1);
  var num2 = parseInt(req.body.txt2);

  var c = num1+num2;
  var msg="";
  var mycolor=""

  if(c>100){
    msg = "You are passed"
    mycolor = "green"
  }
  else{
    msg = "You are failed"
    mycolor = "red"
  }


  res.render('form-process', {'num1':num1,'num2':num2,'c':c,msg,mycolor});
});


router.get('/signUp', function(req, res, next) {
  res.render('signUp', { title: 'Express' });
});

router.post('/register',function(req,res,next){
  var {email,psw,pswrepeat,name,city,phone,pincode} = req.body;
  var msg="";
  var isErr = true;
  if(psw === pswrepeat)
  {
    isErr=false;
    msg="You are registered successfully";
  }
  else{
    isErr=true;
    msg="Password didn't match";
  }
  res.render("register",{email,psw,pswrepeat,msg,isErr,name,city,phone,pincode})
});


module.exports = router;
