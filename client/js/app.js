angular.module('finalProject', ['ngResource', 'ui.router'])
	.config(MainRouter);


function MainRouter($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('show', {
			url: '/show',
			templateUrl: 'show.html'
		});

}