angular.module('finalProject')
	.directive('graph', graphView);

function graphView() {

	var directive = {

		restrict: 'E',
		replace: true,
		templateUrl: '_graph.html',
		scope: {
			data: '='
		}

	};
	return directive;

}