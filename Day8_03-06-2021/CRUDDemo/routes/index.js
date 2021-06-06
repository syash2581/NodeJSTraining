var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'nodedemo'
})

connection.connect(function (err) {
  if(err)
    return console.log(err.sqlMessage)
  console.log('db connected')
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/add', function(req, res, next) {
  res.render('add-form', { title: 'Express' });
});

router.post('/add-process', function(req, res, next) {
  var {txt1,txt2,txt3} = req.body;
  const myBodydata ={
   product_name :  txt1,
   product_details :  txt2,
   product_price :  txt3
  }
  connection.query("insert into tbl_product set ?",myBodydata,function(err,result){
    if(err) throw err;
    res.redirect('/add');
  });
});


router.get('/display',function(req,res,next){
  connection.query("select * from tbl_product",function(err,db_rows){
      if(err) throw err;
      console.log(db_rows);
      res.render('display',{db_rows_array:db_rows});
  })
});

router.get('/delete/:id',function(req,res,next){
  var id = req.params.id
  connection.query("delete from tbl_product where product_id=?",[id],function(err,db_rows){

    //req.param.id => URL parameter

    if(err) throw err;
      console.log(db_rows);
      res.redirect('/display');
  })
});

router.get('/edit/:id',function(req,res,next){
  var id = req.params.id
  connection.query("select * from tbl_product where product_id=?",[id],function(err,db_rows){

    //req.param.id => URL parameter

    if(err) throw err;
      console.log(db_rows);
      res.render('edit',{db_rows_array:db_rows});
  })
});


router.post('/edit/:id',function(req,res,next){
  var id = req.params.id
  var pname= req.body.txt1;
  var pdetails= req.body.txt2;
  var pprice= req.body.txt3;



  connection.query("update tbl_product set product_details=?,product_name=?,product_price=? where product_id=?",[pdetails,pname,pprice,id],function(err,db_rows){

    //req.param.id => URL parameter

    if(err) throw err;
      console.log(db_rows);
      res.redirect('/display');
  })
});


module.exports = router;
