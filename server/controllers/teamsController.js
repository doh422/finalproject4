var express = require('express');
var teamsController = express.Router();
var YahooFantasy = require('yahoo-fantasy');


var yf = new YahooFantasy(
	'dj0yJmk9Wjl3TGVJRUI5aVpiJmQ9WVdrOVVGWXhSMnQxTldFbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD03NQ--',
	'063bb0db7bed067d504efb0c07743581b03b8e83'
);

var team_key = '238.l.627060.t.8';
function getPlayers(req, res) {
	yf.roster.players(team_key,
		function(err, data){
			if (err) {
				console.log(err);
			} else {
				console.log(data);
			}
			console.log(data);
			console.log(err);
			res.send(data);
		});
}

module.exports = teamsController;