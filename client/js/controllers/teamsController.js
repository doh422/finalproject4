angular.module('finalProject')
	.controller('TeamsController', TeamsController);

TeamsController.$inject = ['$http'];

function TeamsController($http) {

	var self = this;

	this.all = [];

	function getTeam() {
		$http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20fantasysports.teams.roster%20where%20team_key%3D'238.l.627060.t.8'%20and%20date%3D'2010-05-14'&format=json&diagnostics=true&callback=").success(function(data) {
			console.log(data);
			return data;
		});
	}

	getTeam();

}