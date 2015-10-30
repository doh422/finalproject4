angular.module('finalProject')
	.controller('TeamsController', TeamsController);

TeamsController.$inject = ['$http', '$q'];

function TeamsController($http, $q) {

	var self = this;

	self.allTeams = [];
	// self.getDetails = getDetails;


	this.getTeams = getTeams;
	function getTeams() {
		$http.get('http://localhost:3000/api')
		.success(function(data) {
			self.allTeams = data;
			return self.allTeams;
		});
	}
	getTeams();


	this.player = {};
	this.stats = [];
	this.playerID;
	this.statsFourteen = [];
	this.statsThirteen = [];
	this.homers;

	this.getPlayer = getPlayer;
	function getPlayer() {
		console.log(self.playerID);
		self.fifteen = $http.get('http://localhost:3000/api/' + self.playerID, {cache: false});
		self.fourteen = $http.get('http://localhost:3000/fourteen/' + self.playerID, {cache: false});
		self.thirteen = $http.get('http://localhost:3000/thirteen/' + self.playerID, {cache: false});

		$q.all([self.fifteen, self.fourteen, self.thirteen]).then(function(data) {
			self.player = data[0].data;
			self.stats = data[0].data.stats.stats;
			self.statsFourteen = data[1].data.stats.stats;
			self.statsThirteen = data[2].data.stats.stats;
			self.homers = data[0].data.stats.stats[9].value;
			console.log(self.homers);
			console.log(self.player);
			console.log(self.stats);
		});
	}
	getPlayer();

	this.production = [];

	this.teamStats = teamStats;
	function teamStats() {
		$http.get('http://localhost:3000/api/teamstats')
		.success(function(data) {
			self.production = data.stats.team_stats.stats;
			return self.production;
		});
	}
	teamStats();

	this.category = [];

	this.getCategory = getCategory;
	function getCategory() {
		$http.get('http://localhost:3000/api/category')
		.success(function(data) {
			self.category = data;
			console.log(self.category);
			return self.category;
		});
	}
	getCategory();

	this.setPlayerID = setPlayerID;
	function setPlayerID(player) {
		self.playerID = player.player_id;
		self.getPlayer();
	}



}