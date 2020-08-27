var express = require('express');
var bodyParser = require( "body-parser" );
var router = express.Router();
var db=require('../database');



router.get('/lostitems', function(req, res, next) {
  var sql='SELECT * FROM lost_items';
  db.query(sql, function (err, data, fields) {
  if (err) throw err;
  res.render('lostitems', { title: 'Lost Items', userData: data});
});
});
router.get('/lostitems/:id', function(req, res, next) {
var sql='SELECT * FROM lost_items WHERE Items_Owner = ?';
var data = [req.params.id]
db.query(sql, data, function (err, data, fields) {
if (err) throw err;
res.render('lostitems', { title: 'Lost Items', userData: data});
});
});


router.get('/gifts', function(req, res, next) {
  var sql='SELECT * FROM fe3h_likes_dislikes';
  db.query(sql, function (err, data, fields) {
  if (err) throw err;
  res.render('gifts', { title: 'Gifts', userData: data});
});
});
router.get('/gifts/:id', function(req, res, next) {
  var sql="SELECT * FROM gifts WHERE Unit_Name LIKE ?";
  var data = [req.params.id]
db.query(sql, data, function (err, data, fields) {
if (err) throw err;
res.render('unitgifts', { title: 'Unit Gifts', userData: data});
});
});
router.get('/giftsselect/:id', function(req, res, next) {
  var sql='SELECT * FROM fe3h_likes_dislikes where Gift_name Like ?';
  db.query(sql, function (err, data, fields) {
  if (err) throw err;
  res.render('gifts', { title: 'Gifts', userData: data});
});
});

router.get('/units', function(req, res, next) {
  var sql='SELECT * FROM unitstrengths';
  db.query(sql, function (err, data, fields) {
  if (err) throw err;
  res.render('unit', { title: 'Units', userData: data});
});
});

router.get('/tea', (req,res) => { 

  res.render('error', { title: 'Tea'});
});

module.exports = router;
