var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var con=mysql.createPool({
  host:'localhost',
  user:'root',
  password:'123456',
  database:'item'
})

/* GET users listing. */
router.post('/list', function(req, res, next) {
  res.header('Access-Control-Allow-Origin',"*")
  con.query('SELECT title,con FROM tj',function(err,rows,fields){
    if(err) throw err
    res.send(rows)
    console.log(rows)
  })
});

router.post('/list1', function(req, res, next) {
  res.header('Access-Control-Allow-Origin',"*")
  con.query('INSERT INTO tj (title,con) VALUES("'+req.body.abc+'","'+req.body.abb+'")',function(err,rows,fields){
    if(err) throw err
    res.send(rows)
    console.log(rows)
  })
});

module.exports = router;
