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

	this.getPlayer = getPlayer;
	function getPlayer() {
		$http.get('http://localhost:3000/api/player')
		.success(function(data) {
			console.log(data);
			self.player = data;
			self.stats = data.stats.stats;
			console.log(self.stats);
			return self.player;
		});
	}
	getPlayer();
}