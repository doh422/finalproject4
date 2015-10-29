angular.module('finalProject')
	.controller('TeamsController', TeamsController);

TeamsController.$inject = ['$http'];

function TeamsController($http) {

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

	this.getPlayer = getPlayer;
	function getPlayer() {
		console.log(self.playerName);
		$http.get('http://localhost:3000/api/' + self.playerName)
		.success(function(data) {
			console.log(data);
			self.player = data;
			self.stats = data.stats.stats;
			return self.player;
		});
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

	this.cateogy = [];
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
}