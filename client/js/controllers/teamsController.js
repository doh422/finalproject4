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



	this.getGraph = getGraph;
	function getGraph(stats, statsFourteen, statsThirteen) {
		var dataArray = [30,40,50,60];

		var width = 500;
		var height = 500;

		//fixes issue of max width being 600 but canvas being 500
		var widthScale = d3.scale.linear()
			//range of values
			.domain([0, 60])
			//range of canvas
			.range([0, width])

		//color scale, red for minimum value up to blue for largest
		var color = d3.scale.linear()
			.domain([0,60])
			.range(["red", "blue"])

		//creating axis
		var axis = d3.svg.axis()
			//number of intervals on axis
			.ticks(5)
			.scale(widthScale);

		//first establish canvas to draw on
		var canvas = d3.selectAll("body")
			.append("svg")
			.attr("width", width)
			.attr("height", height)
			//adding group
			.append("g")
			//transform moves group 
			.attr("transform", "translate(50,20)")

			

		var bars = canvas.selectAll("rect")
			.data(dataArray)
			.enter()
				.append("rect")
				//loops thru dataArray and scales to canvas
				.attr("width", function(d) {
					return widthScale(d);
				})
				.attr("height", 50)
				.attr("fill", function(d) {
					return color(d);
				})
				// d is value, i is index of data value
				.attr("y", function(d, i) {
					return i * 100;
				});  

		//calling, appending, and moving axis below graph		
		canvas.append("g")
			.attr("transform", "translate(0,400)")
			.call(axis);

		// var circle = canvas.append("circle")
		// 	.attr("cx", 250)
		// 	.attr("cy", 250)
		// 	.attr("r", 50)
		// 	.attr("fill", "red");

		var rectangle = canvas.append("rect")
			.attr("width", 100)
			.attr("height", 50);

	// 	var line = canvas.append("line")
	// 		.attr("x1", 0)
	// 		.attr("y1", 100)
	// 		.attr("x2", 400)
	// 		.attr("y2", 400)
	// 		.attr("stroke", "green")
	// 		.attr("stroke-width", 10);
	}
	getGraph();

}