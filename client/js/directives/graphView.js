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



            }
			GetGraph(scope.numbers);
		}
	};
	return directive;
}


