angular.module('finalProject')
	.controller('TeamsController', TeamsController);

TeamsController.$inject = ['$http'];

function TeamsController($http) {

	var self = this;

	this.all = [];
	this.getTeam = getTeam;

	function getTeam() {
		$http.get('http://localhost:3000/')
		.success(function(data) {
			console.log(data);
			return data;
		});
	}

	getTeam();

}