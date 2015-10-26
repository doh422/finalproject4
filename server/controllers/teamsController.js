var teamsController = express.Router();
var YahooFantasy = require('yahoo-fantasy');	



var yf = new YahooFantasy(
	process.env.YAHOO_CONSUMER_KEY,
	process.env.YAHOO_CONSUMER_SECRET,
	);

yf.('http://fantasysports.yahooapis.com/fantasy/v2/team/' + '238.l.627060.t.8' + '/roster/players?format=json')	
	.then(function(err, data) {
		console.log(err);
		console.log(data);
	});