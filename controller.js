var app = angular.module('commuteCalculator');

app.controller("CommuteController", function($scope, commuteService){
  // $scope.????(what does the govs api require here) = function(){
  	//return data from service call/GET
  	commuteService.getCar().then(function(data){
  		console.log(data);
  	})
  	$scope.car = "howdy doody";
  });