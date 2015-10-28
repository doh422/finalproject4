var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var YahooFantasy = require('yahoo-fantasy');
var teamsController = require('./server/controllers/teamsController.js');
var cors = require('cors');
// var d3 = require('d3'),
// 	jsdom = require('jsdom');
// var document = jsdom.jsdom(),
// 	svg = d3.select(document.body).append('svg');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


var yf = new YahooFantasy(
	'dj0yJmk9Wjl3TGVJRUI5aVpiJmQ9WVdrOVVGWXhSMnQxTldFbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD03NQ--',
	'063bb0db7bed067d504efb0c07743581b03b8e83'
);

team_key = '238.l.627060.t.8';

app.get('/api', function(req, res) {
	yf.roster.players(team_key,
		function(err, data){
			if (err) {
				console.log(err);
			} else {
				console.log(data);
			}
			res.send(data);
		});
});

app.get('/api/player', function(req, res) {
	var player_key = '328.p.6619';

	yf.player.stats(player_key,
		function(err, data){
			if (err) {
				console.log(err);
			} else {
				console.log(data);
			}
			console.log(data);
			res.send(data);
		});
});

app.get('/api/teamstats', function(req, res) {
	yf.team.stats(team_key,
		function(err, data) {
			if (err) {
				console.log(err);
			} else {
				console.log(data);
			}
			console.log(data);
			res.send(data);
		});
});

app.get('/api/category', function(req, res) {
	yf.game.stat_categories('mlb',
		function (err, data) {
			if (err) {
				console.log(err);
			} else {
				console.log(data);
			}
			console.log(data);
			res.send(data);
		});
});


app.get('/', function (req, res) {
	res.sendFile(__dirname + '/client/views/index.html');
});

//shortcut to reference files inside client/js
app.use('/js', express.static(__dirname + '/client/js'));

app.listen(3000, function() {
	console.log('I\'m listening...');
});
