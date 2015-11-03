angular.module('finalProject')
	.directive('graph', graphView);

function graphView() {

	var directive = {

		restrict: 'EA',
		template: '<div class="graph-container"></div>',
		scope: {
			numbers: '=',
		},

		link:function(scope, elem, attrs) {

			
			function GetGraph(numbers) {

				var dataArray = [numbers, 34, 27, 25];
				var statistics = ["2015 HRs","2014 HRs", "2013 HRs", "Avg"];
				console.log('hello');
				console.log(numbers);


				// d3.json(numbers, function(data) {

				// 	var canvas = d3.select("body").append("svg")
				// 		.attr("width", 500)
				// 		.attr("height", 500)

				// 	canvas.selectAll("rect")
				// 		.data(dataArray)
				// 		.enter()
				// 			.append("rect")
				// 			.attr("width", function(d) {
				// 				return d * 10
				// 			})
				// 			.attr("height", 48)
				// 			.attr("y", function(d, i) {
				// 				return i * 50;
				// 			})
				// 			.attr("fill", "blue");

				// 	canvas.selectAll("text")
				// 		.data(dataArray)
				// 		.enter()
				// 			.append("text")
				// 			.attr("fill", "white")
				// 			.attr("y", function(d, i) {
				// 				return i * 50 + 24;
				// 			})
				// 			.text(function(d) {
				// 				return d
				// 			})
				// }


				var width = 500;
				var height = 500;

				//fixes issue of max width being 600 but canvas being 500
				var widthScale = d3.scale.linear()
					//range of values
					.domain([0, 60])
					//range of canvas
					.range([0, width]);

				//color scale, red for minimum value up to blue for largest
				// var color = d3.scale.linear()
				// 	.domain([0,60])
				// 	.attr("fill", "blue")

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
					.attr("transform", "translate(50,20)");

					

				var bars = canvas.selectAll("rect")
					.data(dataArray)
					.enter()
						.append("rect")
						//loops thru dataArray and scales to canvas
						.attr("width", function(d) {
							return widthScale(d);
						})
						.attr("height", 50)
						.attr("fill", "blue")
						// d is value, i is index of data value
						.attr("y", function(d, i) {
							return i * 100;
						});

				//calling, appending, and moving axis below graph		
				canvas.append("g")
					.attr("transform", "translate(0,400)")
					.call(axis);

				canvas.selectAll("text")
						.data(statistics)
						.enter()
							.append("text")
							.attr("fill", "black")
							.attr("y", function(d, i) {
								return i * 50 + 24;
							})
							.text(function(d) {
								return d;
							});


            }
					GetGraph(scope.numbers);
		}
	};
	return directive;
}


