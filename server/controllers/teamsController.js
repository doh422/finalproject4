require('dotenv').load();

var express = require('express');
var teamsController = express.Router();
var YahooFantasy = require('yahoo-fantasy');


// //api oauth
// var yf = new YahooFantasy(
// 	process.env.YAHOO_CONSUMER_KEY,
// 	process.env.YAHOO_CONSUMER_SECRET
// );

// teamsController.get('/api', function(req, res) {
// 	//api call
// 	var team_key = '238.l.627060.t.8';
// 	function getPlayers(req, res) {
// 	yf.roster.players(team_key,
// 		function(err, data){
// 			if (err) {
// 				console.log(err);
// 			} else {
// 				console.log(data);
// 			}
// 			console.log(data);
// 			console.log(err);
// 			res.send(data);
// 		});
// 	}

// });

module.exports = teamsController;