angular.module('finalProject')
	.controller('TeamsController', TeamsController);

TeamsController.$inject = ['$http'];

function TeamsController($http) {

	var self = this;

	this.all = [];

	// function getTeam() {
	// 	$http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20fantasysports.players.stats%20where%20league_key%3D'238.l.627060'%20and%20player_key%3D'238.p.6619'&format=json&diagnostics=true&callback=").success(function(data) {
	// 		console.log(data);
	// 		return data;
	// 	});
	// }

	// getTeam();

}