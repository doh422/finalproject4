angular.module('finalProject')
	.directive('graph', graphView);

function graphView() {

	var directive = {

		restrict: 'EA',
		template: '<div class="graph-container"></div>',
		scope: {
			numbers: '=',
		},

		link:function(scope, element, attrs) {

			function GetGraph(numbers) {
				

				var width = 500;
				var height = 500;

				//fixes issue of max width being 600 but canvas being 500
				var widthScale = d3.scale.linear()
					//range of values
					.domain([0, 60])
					//range of canvas
					.range([0, width]);

				//color scale, red for minimum value up to blue for largest
				var color = d3.scale.linear()
					.domain([0,60])
					.range(["red", "blue"]);

				//creating axis
				var axis = d3.svg.axis()
					//number of intervals on axis
					.ticks(5)
					.scale(widthScale);

				//first establish canvas to draw on
				var canvas = d3.select(elem[0])
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

				var rectangle = canvas.append("rect")
					.attr("width", 100)
					.attr("height", 50);

			}
			GetGraph(scope.numbers);
		}
	};
}