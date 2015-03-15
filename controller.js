var app = angular.module("CommuteCalculator");


app.controller("CommuteController", function($scope) {

	var init = function() {
		var container = d3.select(".indResults.roundTripBars")
		container.innerHTML = ''

		$scope.roundTripCanvas = container.append("svg")
			.attr("width", 400)
			.attr("height", 400);

		var group = $scope.roundTripCanvas.append("g")
			.attr("transform", "translate(20, 0)")



	};


	init();
	$scope.submitData = function() {
		carGas();
		tireCalc();
		oilCalc();
		maintenanceCalc();
		insCalc();
		minRound();
		hourRound();
		eightHourRound();
		fortyHourRound();
		hourlyWageRound();
		milesRound();
		irsRound();
		actualRound();
		avgRound();
		wageIrsRound();
		wageActualRound();
		wageAverageRound();
		minsWeek();
		hoursWeek();
		eightHourWeek();
		fortyHourWeek();
		hourlyWageWeek();
		milesDrivenWeek();
		irsWeek();
		actualWeek();
		avgWeek();
		wageIrsWeek();
		wageActualWeek();
		wageAverageWeek();
		minsTen();
		hoursTen();
		eightHourTen();
		fortyHourTen();
		hourlyWageTen();
		milesDrivenTen();
		irsTen();
		actualTen();
		avgTen();
		wageIrsTen();
		wageActualTen();
		wageAverageTen()
			// drawPieChart();
		drawRoundTripBars();
		// drawWeekTripBars();
		// drawTenTripBars();
	};

	var actual = $scope.carGasAns + $scope.tire + $scope.oil + $scope.maint + $scope.ins;
	var carGas = function() {
		$scope.carGasAns = $scope.dollarPerGallonOfGas / $scope.mpgOfCar;
	};

	var tireCalc = function() {
		$scope.tire = $scope.costOfTires / $scope.milesTiresLast;
	};

	var oilCalc = function() {
		$scope.oil = $scope.costOfOilChange / $scope.milesOilChangeLast;
	};

	var maintenanceCalc = function() {
		$scope.maint = $scope.costOfMaintenance / $scope.milesMaintenanceLast;
	};

	var insCalc = function() {
		var milesMonth = $scope.milesToWork * 2 * 31;
		$scope.ins = $scope.costOfInsuranceEachMonth / milesMonth;
	};

	var minRound = function() {
		$scope.minsRound = $scope.minutesToWork * 2;
	};

	var hourRound = function() {
		$scope.hoursRound = $scope.minsRound / 60;
	};

	var eightHourRound = function() {
		$scope.eightHourRound = $scope.hoursRound / 8;
	};

	var fortyHourRound = function() {
		$scope.fortyHourRound = $scope.eightHourRound / 40;
	};

	var hourlyWageRound = function() {
		$scope.hourlyWageRound = $scope.avgHourlyWage * $scope.hoursRound;
	};

	var milesRound = function() {
		$scope.milesDrivenRound = $scope.milesToWork * 2;
	};

	var irsRound = function() {
		$scope.irsRound = $scope.milesDrivenRound * .51;
	};

	var actualRound = function() {
		var actual = $scope.carGasAns + $scope.tire + $scope.oil + $scope.maint + $scope.ins;
		$scope.actualRound = $scope.milesDrivenRound * actual;
	};

	var avgRound = function() {
		$scope.avgRound = ($scope.irsRound + $scope.actualRound) / 2;
	};

	var wageIrsRound = function() {
		$scope.wageIrsRound = $scope.irsRound + $scope.hourlyWageRound;
	};

	var wageActualRound = function() {
		$scope.wageActualRound = $scope.actualRound + $scope.hourlyWageRound;
	};

	var wageAverageRound = function() {
		$scope.wageAverageRound = $scope.avgRound + $scope.hourlyWageRound;
	};

	var minsWeek = function() {
		$scope.minsWeek = $scope.minsRound * 5;
	};

	var hoursWeek = function() {
		$scope.hoursWeek = $scope.hoursRound * 5;
	};

	var eightHourWeek = function() {
		$scope.eightHourWeek = $scope.eightHourRound * 5;
	};

	var fortyHourWeek = function() {
		$scope.fortyHourWeek = $scope.fortyHourRound * 5;
	};

	var hourlyWageWeek = function() {
		$scope.hourlyWageWeek = $scope.hourlyWageRound * 5;
	};

	var milesDrivenWeek = function() {
		$scope.milesDrivenWeek = $scope.milesDrivenRound * 5;
	};

	var irsWeek = function() {
		$scope.irsWeek = $scope.milesDrivenWeek * .51;
	};

	var actualWeek = function() {
		var actual = $scope.carGasAns + $scope.tire + $scope.oil + $scope.maint + $scope.ins;
		$scope.actualWeek = $scope.milesDrivenWeek * actual;
	};

	var avgWeek = function() {
		$scope.avgWeek = ($scope.irsWeek + $scope.actualWeek) / 2;
	};

	var wageIrsWeek = function() {
		$scope.wageIrsWeek = $scope.hourlyWageWeek + $scope.irsWeek;
	};

	var wageActualWeek = function() {
		$scope.wageActualWeek = $scope.hourlyWageWeek + $scope.actualWeek;
	};

	var wageAverageWeek = function() {
		$scope.wageAverageWeek = $scope.hourlyWageWeek + $scope.avgWeek;
	};

	var minsTen = function() {
		$scope.minsTen = $scope.minsWeek * 520;
	};

	var hoursTen = function() {
		$scope.hoursTen = $scope.hoursWeek * 520;
	};

	var eightHourTen = function() {
		$scope.eightHourTen = $scope.eightHourWeek * 520;
	};

	var fortyHourTen = function() {
		$scope.fortyHourTen = $scope.fortyHourWeek * 520;
	};

	var hourlyWageTen = function() {
		$scope.hourlyWageTen = $scope.hourlyWageWeek * 520;
	};

	var milesDrivenTen = function() {
		$scope.milesDrivenTen = $scope.milesDrivenWeek * 520;
	};

	var irsTen = function() {
		$scope.irsTen = $scope.milesDrivenTen * .51;
	};

	var actualTen = function() {
		var actual = $scope.carGasAns + $scope.tire + $scope.oil + $scope.maint + $scope.ins;
		$scope.actualTen = $scope.milesDrivenTen * actual;
	};

	var avgTen = function() {
		$scope.avgTen = ($scope.irsTen + $scope.actualTen) / 2;
	};

	var wageIrsTen = function() {
		$scope.wageIrsTen = $scope.hourlyWageTen + $scope.irsTen;
	};

	var wageActualTen = function() {
		$scope.wageActualTen = $scope.hourlyWageTen + $scope.actualTen;
	};

	var wageAverageTen = function() {
		$scope.wageAverageTen = $scope.hourlyWageTen + $scope.avgTen;
	};

	var drawPieChart = function() {
		var data = [$scope.carGasAns, $scope.tire, $scope.oil, $scope.maint, $scope.ins];
		var r = 200;

		var color = d3.scale.ordinal()
			.range(["#6AFCFB", "#FE792C", "#FE1B10", "#C6EE2B", "#FF6BCC"]);

		var container = d3.select(".indResults.pie")
		container.innerHTML = ''

		var canvas = container.append("svg")
			.attr("width", 400)
			.attr("height", 400);

		var group = canvas.append("g")
			.attr("transform", "translate(200, 200)");

		var arc = d3.svg.arc()
			.innerRadius(0)
			.outerRadius(r);

		var pie = d3.layout.pie()
			.value(function(d) {
				return d;
			});

		var arcs = group.selectAll(".arc")
			.data(pie(data))
			.enter()
			.append("g")
			.attr("class", "arc");

		arcs.append("path")
			.attr("d", arc)
			.attr("fill", function(d) {
				return color(d.data);
			});

		arcs.append("text")
			.attr("transform", function(d) {
				return "translate(" + arc.centroid(d) + ")";
			})
			.attr("text-anchor", "middle")
			.attr("font-size", "1.5em")
			.text(function(d) {
				return d.data;
			});
	};



	var drawRoundTripBars = function() {
		var dataArray = [$scope.wageIrsRound, $scope.wageActualRound, $scope.wageAverageRound];
		// var dataArray = [Math.random() * 100000, Math.random() * 100000, Math.random() * 100000];

		console.log(dataArray, d3.max(dataArray));
		var width = 500;
		var height = 500;

		var widthScale = d3.scale.linear()
			.domain([d3.min(dataArray) * 0.9, d3.max(dataArray) * 1.1])
			.range([0, width]);

		var color = d3.scale.linear()
			.domain([d3.min(dataArray) * 0.9, d3.max(dataArray) * 1.1])
			.range(["yellow", "pink"]);

		var axis = d3.svg.axis()
			.ticks(5)
			.scale(widthScale);

		// var container = d3.select(".indResults.roundTripBars")
		// container.innerHTML = ''

		// var canvas = container.append("svg")
		// 	.attr("width", 400)
		// 	.attr("height", 400);

		// var group = canvas.append("g")
		// 	.attr("transform", "translate(20, 0)")

		var bars = $scope.roundTripCanvas.selectAll("rect")
			.data(dataArray);


		bars.exit().remove();

		bars.enter()
			.append("rect")
			.attr({
				'width': 0,
				'height': 50,
				'fill': function(d) {
					return color(d);
				},
				'y': function(d, i) {
					return i * 100;
				}
			});

		bars
			.transition()
			.attr("width", function(d) {
				console.log(widthScale(d), widthScale.range());
				return widthScale(d);
			});


		// setInterval(function() {
		// 	bars
		// 		.transition()
		// 		.attr("width", function(d) {
		// 			return Math.floor(Math.random() * 100);
		// 		});
		// }, 5000);

		// rect.transition()
		// 	.duration(1500)
		// 	.delay(2000)
		// 	.attr("cx", 150);

		$scope.roundTripCanvas.append("g")
			.attr("transform", "translate(0, 370)")
			.call(axis);
	};

	var drawWeekTripBars = function() {
		// $scope.wageIrsWeek, $scope.wageActualWeek, $scope.wageAverageWeek
		var dataArray = [5, 30, 50, 60];

		var width = 500;
		var height = 500;

		var widthScale = d3.scale.linear()
			.domain([0, 60])
			.range([0, width]);

		var color = d3.scale.linear()
			.domain([0, 60])
			.range(["red", "black"]);

		var axis = d3.svg.axis()
			.ticks(5)
			.scale(widthScale);

		var container = d3.select(".indResults.weekTripBars")
		container.innerHTML = ''

		var canvas = container.append("svg")
			.attr("width", 400)
			.attr("height", 400);

		var group = canvas.append("g")
			.attr("transform", "translate(20, 0)")

		var bars = canvas.selectAll("rect")
			.data(dataArray)
			.enter()
			.append("rect")
			.attr("width", function(d) {
				return widthScale(d);
			})
			.attr("height", 50)
			.attr("fill", function(d) {
				return color(d);
			})
			.attr("y", function(d, i) {
				return i * 100;
			});

		canvas.append("g")
			.attr("transform", "translate(0, 400)")
			.call(axis);
	};

	var drawTenTripBars = function() {
		// $scope.wageIrsTen, $scope.wageActualTen, $scope.wageAverageTen
		var dataArray = [5, 30, 50, 60];

		var width = 500;
		var height = 500;

		var widthScale = d3.scale.linear()
			.domain([0, 60])
			.range([0, width]);

		var color = d3.scale.linear()
			.domain([0, 60])
			.range(["red", "gray"]);

		var axis = d3.svg.axis()
			.ticks(5)
			.scale(widthScale);

		var container = d3.select(".indResults.tenTripBars")
		container.innerHTML = ''

		var canvas = container.append("svg")
			.attr("width", 400)
			.attr("height", 400);

		var group = canvas.append("g")
			.attr("transform", "translate(20, 0)")

		var bars = canvas.selectAll("rect")
			.data(dataArray)
			.enter()
			.append("rect")
			.attr("width", function(d) {
				return widthScale(d);
			})
			.attr("height", 50)
			.attr("fill", function(d) {
				return color(d);
			})
			.attr("y", function(d, i) {
				return i * 100;
			});

		canvas.append("g")
			.attr("transform", "translate(0, 400)")
			.call(axis);
	};

});