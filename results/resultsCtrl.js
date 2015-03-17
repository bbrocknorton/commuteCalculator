var app = angular.module('mini-Routing');

app.controller('resultsCtrl', function($scope, $routeParams, resultsService) {
	if ($routeParams.id === 'roundTrip') {
		$scope.results = resultsService.roundTrip
	} else if ($routeParams.id === 'weekTrip') { //return roundTrip results
		$scope.results = resultsService.weekTrip
	} else if ($routeParams.id === 'tenTrip') {
		$scope.results = resultsService.tenTrip
	} else //return home???
})