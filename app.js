var app = angular.module('CommuteCalculator', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'Commute Calculator/index.html',
			controller: 'CommuteController'
		})
		.when('/results/:id', {
			templateUrl: '/results/resultsTmpl.html',
			controller: 'resultsCtrl'
		})
		.otherwise({
			redirectTo: '/'
		})
});