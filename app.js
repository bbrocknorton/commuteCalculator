var app = angular.module('CommuteCalculator', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/home.html',
			controller: 'CommuteController'
		})
		.when('/results/', {
			templateUrl: '/results/inputs/inputResults.html',
			controller: 'CommuteController'
		})
		.when('/results/:id', {
			templateUrl: '/results/round/roundTripResults.html',
			controller: 'CommuteController'
		}) //round trip route
		.when('/results/:id', {
			templateUrl: '/results/resultsTmpl.html',
			controller: 'CommuteController'
		}) //week route
		.when('/results/:id', {
			templateUrl: '/results/resultsTmpl.html',
			controller: 'CommuteController'
		}) //ten year route
		.otherwise({
			redirectTo: '/'
		})
});

// app.directive('resultsButton', function() {
// 	return {
// 		restrict: 'E',
// 		templateUrl: "./app/nav/nav.html",
// 		controller: "",
// 		scope: {},
// 		link: function($scope, element, attrs) {

// 		}
// 	}
// })