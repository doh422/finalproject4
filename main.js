var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var FantasySports = require('FantasySports');
var YahooFantasy = require('yahoo-fantasy');




app.get('/', function(req, res) {
	res.sendFile(__dirname + '/client/views/index.html');

var yf = new YahooFantasy(
	'dj0yJmk9Wjl3TGVJRUI5aVpiJmQ9WVdrOVVGWXhSMnQxTldFbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD03NQ--',
	'063bb0db7bed067d504efb0c07743581b03b8e83'
);

var team_key = '238.l.627060.t.8';

yf.roster.players(team_key,
	function(err, data){
		if (err) {
			console.log(err);
		} else {
			console.log(data);
		}
		console.log(data);
		console.log(err);
	});

});

//shortcut to reference files inside client/js
app.use('/js', express.static(__dirname + '/client/js'));

app.listen(3000, function() {
	console.log('I\'m listening...');
});



