angular.module('finalProject')
	.controller('TeamsController', TeamsController);

TeamsController.$inject = ['$http', '$q'];

function TeamsController($http, $q) {

	var self = this;

	this.allTeams = [];

	this.getTeams = getTeams;
	function getTeams() {
		$http.get('http://localhost:3000/api')
		.success(function(data) {
			console.log(data);
			self.allTeams = data;
			return self.allTeams;
		});
	}
	getTeams();


	this.player = {};
	this.stats = [];
	this.playerName;

	this.statsFourteen = [];
	this.statsThirteen = [];

	this.getPlayer = getPlayer;
	function getPlayer() {
		console.log(self.playerName);
		self.fifteen = $http.get('http://localhost:3000/api/' + self.playerName, {cache: false});
		self.fourteen = $http.get('http://localhost:3000/fourteen/' + self.playerName, {cache: false});
		self.thirteen = $http.get('http://localhost:3000/thirteen/' + self.playerName, {cache: false});

		$q.all([self.fifteen, self.fourteen, self.thirteen]).then(function(data) {
			self.player = data[0].data;
			self.stats = data[0].data.stats.stats;
			self.statsFourteen = data[1].data.stats.stats;
			self.statsThirteen = data[2].data.stats.stats;
			console.log(self.stats);
			console.log(self.statsFourteen);
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




}