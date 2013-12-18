
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

// var redis = require('redis');
// var client = redis.createClient();

var app = express();
var Screen = require('./routes/screen');
var Card = require('./routes/card');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'templates/jade'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

Screen.init();
app.get('/screen', function (req,res){
  res.render('./screen', {title: "Let\'s enjoy Bingo"});
});
app.get('/bingo', function (req, res){
	res.render('./bingo', {})
});




app.get('/card', function (req,res) {
  res.send({card: Card.init()});
});
app.get('/next',function(req,res){
	res.send({number: Screen.next()});
});
app.get('/check/:num',function(req,res){
	res.send({bool: Screen.check(req.param('num'))})
});
app.get('/reach/:name',function(req,res){
	return {bool: Screen.addReachList(req.param('name'))};
});
app.get('/bingo/:name',function(req,res){
	return {bool: Screen.addBingoList(req.param('name'))};
});

app.get('/status',function(req,res){
	return {reachList: Screen.getReachList(), bingoList: Screen.getBingoList()};
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
