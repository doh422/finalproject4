angular.module('finalProject', ['ui.router'])
	.config(MainRouter);


function MainRouter($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('roster', {
			url: '/',
			templateUrl: 'roster.html'
		});
		

	$urlRouterProvider.otherwise("/");

}