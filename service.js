var app = angular.module('commuteCalculator');

app.service('commuteService', function($http){
  this.getCar = function(carmodel){
  	return $http({
  		method: 'GET',
  		url: 'http://www.fueleconomy.gov/ws/rest/vehicle/31873'
  	});
  };
});