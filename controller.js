var app = angular.module("CommuteCalculator");


app.controller("CommuteController", function($scope) {
	var actual = $scope.carGasAns + $scope.tire + $scope.oil + $scope.maint + $scope.ins;
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

	$scope.eightHourRound = function() {
		$scope.eightHourRound = $scope.hoursRound / 8;
	};

	$scope.fortyHourRound = function() {
		$scope.fortyHourRound = $scope.eightHourRound / 40;
	};

	$scope.hourlyWageRound = function() {
		$scope.hourlyWageRound = $scope.avgHourlyWage * $scope.hoursRound;
	};

	$scope.milesRound = function() {
		$scope.milesDrivenRound = $scope.milesToWork * 2;
	};

	$scope.irsRound = function() {
		$scope.irsRound = $scope.milesDrivenRound * .51;
	};

	$scope.actualRound = function() {
		var actual = $scope.carGasAns + $scope.tire + $scope.oil + $scope.maint + $scope.ins;
		$scope.actualRound = $scope.milesDrivenRound * actual;
	};

	$scope.avgRound = function() {
		$scope.avgRound = ($scope.irsRound + $scope.actualRound) / 2;
	};

	$scope.wageIrsRound = function() {
		$scope.wageIrsRound = $scope.irsRound + $scope.hourlyWageRound;
	};

	$scope.wageActualRound = function() {
		$scope.wageActualRound = $scope.actualRound + $scope.hourlyWageRound;
	};

	$scope.wageAverageRound = function() {
		$scope.wageAverageRound = $scope.avgRound + $scope.hourlyWageRound;
	};

	$scope.minsWeek = function() {
		$scope.minsWeek = $scope.minsRound * 5;
	};

	$scope.hoursWeek = function() {
		$scope.hoursWeek = $scope.hoursRound * 5;
	};

	$scope.eightHourWeek = function() {
		$scope.eightHourWeek = $scope.eightHourRound * 5;
	};

	$scope.fortyHourWeek = function() {
		$scope.fortyHourWeek = $scope.fortyHourRound * 5;
	};

	$scope.hourlyWageWeek = function() {
		$scope.hourlyWageWeek = $scope.hourlyWageRound * 5;
	};

	$scope.milesDrivenWeek = function() {
		$scope.milesDrivenWeek = $scope.milesDrivenRound * 5;
	};

	$scope.irsWeek = function() {
		$scope.irsWeek = $scope.milesDrivenWeek * .51;
	};

	$scope.actualWeek = function() {
		var actual = $scope.carGasAns + $scope.tire + $scope.oil + $scope.maint + $scope.ins;
		$scope.actualWeek = $scope.milesDrivenWeek * actual;
	};

	$scope.avgWeek = function() {
		$scope.avgWeek = ($scope.irsWeek + $scope.actualWeek) / 2;
	};

	$scope.wageIrsWeek = function() {
		$scope.wageIrsWeek = $scope.hourlyWageWeek + $scope.irsWeek;
	};

	$scope.wageActualWeek = function() {
		$scope.wageActualWeek = $scope.hourlyWageWeek + $scope.actualWeek;
	};

	$scope.wageAverageWeek = function() {
		$scope.wageAverageWeek = $scope.hourlyWageWeek + $scope.avgWeek;
	};

	$scope.minsTen = function() {
		$scope.minsTen = $scope.minsWeek * 520;
	};

	$scope.hoursTen = function() {
		$scope.hoursTen = $scope.hoursWeek * 520;
	};

	$scope.eightHourTen = function() {
		$scope.eightHourTen = $scope.eightHourWeek * 520;
	};

	$scope.fortyHourTen = function() {
		$scope.fortyHourTen = $scope.fortyHourWeek * 520;
	};

	$scope.hourlyWageTen = function() {
		$scope.hourlyWageTen = $scope.hourlyWageWeek * 520;
	};

	$scope.milesDrivenTen = function() {
		$scope.milesDrivenTen = $scope.milesDrivenWeek * 520;
	};

	$scope.irsTen = function() {
		$scope.irsTen = $scope.milesDrivenTen * .51;
	};

	$scope.actualTen = function() {
		var actual = $scope.carGasAns + $scope.tire + $scope.oil + $scope.maint + $scope.ins;
		$scope.actualTen = $scope.milesDrivenTen * actual;
	};

	$scope.avgTen = function() {
		$scope.avgTen = ($scope.irsTen + $scope.actualTen) / 2;
	};

	$scope.wageIrsTen = function() {
		$scope.wageIrsTen = $scope.hourlyWageTen + $scope.irsTen;
	};

	$scope.wageActualTen = function() {
		$scope.wageActualTen = $scope.hourlyWageTen + $scope.actualTen;
	};

	$scope.wageAverageTen = function() {
		$scope.wageAverageTen = $scope.hourlyWageTen + $scope.avgTen;
	};

});