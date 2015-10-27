angular.module('finalProject', ['ui.router'])
	.config(MainRouter);


function MainRouter($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('roster', {
			url: '/',
			templateUrl: 'roster.html'
		})
		.state('show', {
			url: '/show',
			templateUrl: 'show.html'
		})

	$urlRouterProvider.otherwise("/");

}