var express = require('express');
var bodyParser = require( "body-parser" );
var router = express.Router();
var db=require('../database');


//Lost Items 
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

//Gift Items 
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

//Select Unit
router.get('/units', function(req, res, next) {
  var sql='SELECT * FROM unitstrengths';
  db.query(sql, function (err, data, fields) {
  if (err) throw err;
  res.render('unit', { title: 'Units', userData: data});
});
});

//Favorite Tea
router.get('/tea', (req,res) => { 

  var sql='SELECT * FROM favoriteteas';
  db.query(sql, function (err, data, fields) {
  if (err) throw err;
  res.render('tea', { title: 'Favorite Teas', userData: data});
});
});
router.get('/tea/:id', (req,res) => { 

  var sql='SELECT * FROM favoriteteas WHERE CharacterId = ?';
  var data = [req.params.id]
  db.query(sql, data, function (err, data, fields) {
  if (err) throw err;
  res.render('tea', { title: 'Favorite Teas', userData: data});
});
});

//Tea Conversations
router.get('/teatopic', (req,res) => { 

  var sql='SELECT * FROM teatopics';
  db.query(sql, function (err, data, fields) {
  if (err) throw err;
  res.render('teaconv', { title: 'Teas Topics', userData: data});
});
});
router.get('/teatopic/:id', (req,res) => { 

  var sql='SELECT * FROM teatopics WHERE CharacterId = ?';
  var data = [req.params.id]
  db.query(sql, data, function (err, data, fields) {
  if (err) throw err;
  res.render('teaconv', { title: 'Teas Topics', userData: data});
});
});

//Final Tea Conv
router.get('/teaanswers', (req,res) => { 

  var sql='SELECT * FROM teaanswers';
  db.query(sql, function (err, data, fields) {
  if (err) throw err;
  res.render('teafinal', { title: 'Final Tea Topics', userData: data});
});
});
router.get('/teaanswers/:id', (req,res) => { 

  var sql='SELECT * FROM teaanswers WHERE CharacterId = ?';
  var data = [req.params.id]
  db.query(sql, data, function (err, data, fields) {
  if (err) throw err;
  res.render('teafinal', { title: 'Final Tea Topics', userData: data});
});
});
module.exports = router;
