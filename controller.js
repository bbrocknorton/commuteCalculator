var app = angular.module("CommuteCalculator");

app.controller("CommuteController", function($scope) {

	$scope.carGas = function() {
		$scope.carGasAns = $scope.dollarPerGallonOfGas / $scope.mpgOfCar;
	};

	$scope.tireCalc = function() {
		$scope.tire = $scope.costOfTires / $scope.milesTiresLast;
	};

	$scope.oilCalc = function() {
		$scope.oil = $scope.costOfOilChange / $scope.milesOilChangeLast;
	};

	$scope.maintenanceCalc = function() {
		$scope.maint = $scope.costOfMaintenance / $scope.milesMaintenanceLast;
	};

	$scope.insCalc = function() {
		var milesMonth = $scope.milesToWork * 2 * 31;
		$scope.ins = $scope.costOfInsuranceEachMonth / milesMonth;
	};

	$scope.minRound = function() {
		$scope.minsRound = $scope.minutesToWork * 2;
	};

	$scope.hourRound = function() {
		$scope.hoursRound = $scope.minsRound / 60;
	};

	$scope.eightHourRounds = function() {

	};

	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};

	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};

	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};

	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};

	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};

	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};
	$scope. = function() {};

});