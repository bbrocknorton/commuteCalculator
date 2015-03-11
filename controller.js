var app = angular.module("CommuteCalculator");

app.controller("CommuteController", function($scope){

  	$scope.calcNum = function(){
  		$scope.answer = $scope.number1 * $scope.number2;
  			if($scope.answer < 10000){
  			alert("Good job");
  		} else {
  			alert("What the crap are you doing?!?!");
  		};
  	};

  });


// "use strict";

// angular.module("MMMCalcApp",[]),angular.module("MMMCalcApp")
//   .controller("MainCtrl",
//   	["$scope",function(a){function b(){var b=.01*a.c1interest,c=b/12,
//   	d=12*a.c1years, e=(Math.pow(1+c,d)-1)/c;a.c1result=a.c1amount*e}function c(a,b){return 
//   	a/b}function d(){if(a.c2interest-a.c2inflation>=a.c2withdrawalRate){a.c2totalStache=c(
//   	a.c2expenditures,a.c2withdrawalRate/100);var b=(a.c2interest-a.c2inflation)/1200,
//   	d=a.c2totalStache,e=a.c2increase/(12*b),f=a.c2networth,g=(d+e)/(f+e),h=1+b,i=Math.log(g)/
//   	(12*Math.log(h));a.c2result=0>i?0:i,a.c2WithdrawalWarningNote=!1,a.c2CongratulationsNote
//   	=a.c2result<.05?!0:!1}else a.c2result=9999,a.c2WithdrawalWarningNote=!0}

//   	function e()
//   	{var b=a.c3weeks*a.c3days,c=a.c3dailyHours*b+a.c3commuteTime*b,d=a.c3salary-a.c3commuteCost
//   	*b-a.c3foodCost*b-a.c3otherCosts;a.c3result=d/c}function f(){var b=.01*a.c4rate,c=b/12,
//   	d=a.c4amount*c,e=1-1/Math.pow(1+c,12*a.c4years),f=d/e;a.c4result=f*a.c4years*12}
//   	function g(){var b=.01*a.c5rate;a.c5resultBefore=c(a.c5before,b),a.c5resultAfter=
//   	c(a.c5after,b),a.c5resultDifference=a.c5resultBefore-a.c5resultAfter}function h()
//   	{var b=a.c6totalMiles/a.c6yearlyMiles,c=a.c6cost-a.c6sale,d=a.c6totalMiles*a.c6gas/
//   	a.c6mpg,e=a.c6maintenance*b,f=a.c6insurance*b,g=c+d+e+f;a.c6resultYears=b,a.c6resultCostPerYear
//   	=g/b,a.c6resultCostPerMile=g/a.c6totalMiles}a.c1amount=75,a.c1interest=7,a.c1years=10,
//   	a.$watch("c1amount",function(){b()}),a.$watch("c1years",function(){b()}),a.$watch
//   	("c1interest",function(){b()}),a.c2networth=0,a.c2increase=48e3,a.c2expenditures=24e3,
//   	a.c2interest=7,a.c2inflation=3,a.c2withdrawalRate=4,a.$watch("c2networth",function(){d()})
//   	,a.$watch("c2increase",function(){d()}),a.$watch("c2expenditures",function(){d()}),a.
//   	$watch("c2interest",function(){d()}),a.$watch("c2inflation",function(){d()}),a.$watch
//   	("c2withdrawalRate",function(){d()}),a.c3salary=65e3,a.c3dailyHours=9,a.c3weeks=50,
//   	a.c3days=5,a.c3commuteTime=1,a.c3commuteCost=15,a.c3foodCost=3,a.c3otherCosts=300,
//   	a.$watch("c3salary",function(){e()}),a.$watch("c3dailyHours",function(){e()}),a.$watch
//   	("c3weeks",function(){e()}),a.$watch("c3days",function(){e()}),a.$watch("c3commuteTime",
//   		function(){e()}),a.$watch("c3commuteCost",function(){e()}),a.$watch("c3foodCost",function
//   		(){e()}),a.$watch("c3otherCosts",function(){e()}),a.c4amount=15e3,a.c4rate=4.5,a.c4years=5
//   		,a.$watch("c4amount",function(){f()}),a.$watch("c4rate",function(){f()}),a.$watch
//   		("c4years",function(){f()}),a.c5before=36e3,a.c5after=24e3,a.c5rate=4,a.$watch("c5before",
//   			function(){g()}),a.$watch("c5after",function(){g()}),a.$watch("c5rate",function(){g()}),
//   		a.c6cost=25e3,a.c6sale=7500,a.c6totalMiles=15e4,a.c6mpg=27,a.c6gas=4,a.c6yearlyMiles=15e3,
//   		a.c6maintenance=400,a.c6insurance=1200,a.$watch("c6cost",function(){h()}),a.$watch("c6sale",
//   			function(){h()}),a.$watch("c6totalMiles",function(){h()}),a.$watch("c6mpg",function(){h()}),
//   		a.$watch("c6gas",function(){h()}),a.$watch("c6yearlyMiles",function(){h()}),a.$watch
//   		("c6maintenance",function(){h()}),a.$watch("c6insurance",function(){h()})}]);