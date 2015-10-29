angular.module('finalProject')
	.controller('TeamsController', TeamsController);

TeamsController.$inject = ['$http', '$q'];

function TeamsController($http, $q) {

	var self = this;

	this.all = [];
	this.getTeam = getTeam;

	function getTeam() {
		$http.get('http://localhost:3000/api')
		.success(function(data) {
			console.log(data);
			self.all = data.roster;
			return self.all;
		});
	}
	getTeam();

	this.player = {};
	this.stats = [];
	this.playerName;

	this.statsFourteen = [];

	this.getPlayer = getPlayer;
	function getPlayer() {
		console.log(self.playerName);
		self.fifteen = $http.get('http://localhost:3000/api/' + self.playerName, {cache: false});
		self.fourteen = $http.get('http://localhost:3000/fourteen/' + self.playerName, {cache: false});
		console.log('orig');
		console.log(self.fourteen);

		$q.all([self.fifteen, self.fourteen]).then(function(data) {
			self.player = data[0].data;
			self.stats = data[0].data.stats.stats;
			self.statsFourteen = data[1].data.stats.stats;
			console.log(self.stats);
			console.log(self.statsFourteen);
		});
		// .success(function(data) {
		// 	console.log(data);
		// 	self.player = data;
		// 	self.stats = data.stats.stats;
		// 	return self.player;
		// });
	}
	getPlayer();

	this.production = [];

	this.teamStats = teamStats;
	function teamStats() {
		$http.get('http://localhost:3000/api/teamstats')
		.success(function(data) {
			console.log(data.stats.team_stats.stats);
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
			console.log(data);
			self.category = data;
			return self.category;
		});
	}
	getCategory();

	// this.statsFourteen = [];
	// this.getFourteen = getFourteen;
	// function getFourteen() {
	// 	console.log(self.playerName);
	// 	$http.get('http://localhost:3000/api/fourteen/' + self.playerName)
	// 	.success(function(data) {
	// 		console.log(data);
	// 		self.statsFourteen = data;
	// 		return self.statsFourteen;
	// 	});
	// }
	// getFourteen();
}