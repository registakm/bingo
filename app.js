
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
app.use(express.cookieParser('secretKey'));
app.use(express.session({
	key:'name'
}));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

Screen.init();
app.get('/', function (req, res) {
	// if(!req.session.name){
		res.render('./login', {});
	// } else {
	// 	res.render('./bingo', {});
	// }
});
app.get('/screen', function (req, res) {
	res.render('./screen', {});
});



// app.post('/', Card.login);

// app.get('/card', function (req, res) {
// 	res.send({table: Card.getCard(req)});
// });
app.get('/next',function(req,res){
	res.send(Screen.next());
});
app.get('/check/:num',function(req,res){
	res.send({bool: Screen.check(req.param('num'))});
});
app.post('/reach/:name',function(req,res){
	var name = req.param('name');
	var reachList = [];
	Screen.addReachList(name);
});
app.post('/bingo',function(req,res){
	var name = req.param('name');
	// res.send({bool: Screen.addBingoList(req.session.name)});
});

app.get('/status',function(req,res){
	res.send({reachList: Screen.getReachList()});
});

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});
