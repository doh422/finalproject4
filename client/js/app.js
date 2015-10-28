angular.module('finalProject', ['ui.router'])
	.config(MainRouter);

//using UI Router to enable switching out states (similar to partials)
//quicker performance

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