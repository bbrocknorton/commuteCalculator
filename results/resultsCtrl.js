var app = angular.module('CommuteCalculator');

app.controller('resultsCtrl', function($scope, $routeParams, resultsService) {

	if ($routeParams.id === 'inputs') {
		$scope.results = resultsService.inputs
	} else if ($routeParams.id === 'roundTrip') {
		$scope.results = resultsService.roundTrip
	} else if ($routeParams.id === 'weekTrip') {
		$scope.results = resultsService.weekTrip
	} else if ($routeParams.id === 'tenTrip') {
		$scope.results = resultsService.tenTrip
	} else {
		$scope.results = resultsService.home
	}
});