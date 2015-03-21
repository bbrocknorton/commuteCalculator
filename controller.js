var app = angular.module("CommuteCalculator");


app.controller("CommuteController", function($scope) {



  (function() {

    'use strict';

    // http://stackoverflow.com/a/11381730/989439
    function mobilecheck() {
      var check = false;
      (function(a) {
        if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    }

    var splitlayout = document.getElementById('splitlayout'),
      leftSide = splitlayout.querySelector('div.intro > div.side-left'),
      rightSide = splitlayout.querySelector('div.intro > div.side-right'),
      pageLeft = splitlayout.querySelector('div.page-left'),
      pageRight = splitlayout.querySelector('div.page-right'),
      eventtype = mobilecheck() ? 'touchstart' : 'click',
      transEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'msTransition': 'MSTransitionEnd',
        'transition': 'transitionend'
      },
      transEndEventName = transEndEventNames[Modernizr.prefixed('transition')];

    function initLayout() {
      if (mobilecheck()) {
        classie.add(splitlayout, 'mobile-layout');
      }
      classie.add(splitlayout, 'reset-layout');

      leftSide.querySelector('div.intro-content').addEventListener(eventtype, function(ev) {
        reset();
        classie.add(splitlayout, 'open-left');
      });

      rightSide.querySelector('div.intro-content').addEventListener(eventtype, function(ev) {
        reset();
        classie.add(splitlayout, 'open-right');
      });

      // back to intro
      // after transition ends:
      var onEndTransFn = function() {
          this.removeEventListener(transEndEventName, onEndTransFn);
          classie.add(splitlayout, 'reset-layout');
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        },
        backToIntro = function(ev) {
          ev.preventDefault();
          ev.stopPropagation();
          var dir = classie.has(ev.target, 'back-right') ? 'left' : 'right',
            page = dir === 'right' ? pageRight : pageLeft;
          classie.remove(splitlayout, 'open-' + dir);
          classie.add(splitlayout, 'close-' + dir);
          page.addEventListener(transEndEventName, onEndTransFn);
        };

      splitlayout.querySelector('a.back-left').addEventListener(eventtype, backToIntro);
      splitlayout.querySelector('a.back-right').addEventListener(eventtype, backToIntro);
    }

    function reset() {
      classie.remove(splitlayout, 'close-right');
      classie.remove(splitlayout, 'close-left');
      classie.remove(splitlayout, 'reset-layout');
    }

    initLayout();

  })();









  $scope.resultsChart = "home";

  

  var init = function() {
    $scope.milesToWork = 20;
    $scope.minutesToWork = 30;
    $scope.avgHourlyWage = 12;
    $scope.dollarPerGallonOfGas = 2;
    $scope.mpgOfCar = 20;
    $scope.costOfTires = 400;
    $scope.milesTiresLast = 50000;
    $scope.costOfOilChange = 32;
    $scope.milesOilChangeLast = 5000;
    $scope.costOfMaintenance = 200;
    $scope.milesMaintenanceLast = 20000;
    $scope.costOfInsuranceEachMonth = 35;

    var container = d3.select(".chartContainer");

    $scope.chartSVG = container.append("svg")
      .attr("width", 400)
      .attr("height", 400);

    $scope.chartSVGGroup = $scope.chartSVG.append("g")
      .attr("transform", "translate(20, 0)")
  };

  init();

  // $scope.submitSimpleData = function(display) {
    
  //   minRound();
  //   hourRound();
  //   eightHourRound();
  //   fortyHourRound();
  //   hourlyWageRound();
  //   milesRound();
  //   irsRound();
  //   wageIrsRound();

  //   minsWeek();
  //   hoursWeek();
  //   eightHourWeek();
  //   fortyHourWeek();
  //   hourlyWageWeek();
  //   milesDrivenWeek();
  //   irsWeek();
  //   wageIrsWeek();

  //   minsTen();
  //   hoursTen();
  //   eightHourTen();
  //   fortyHourTen();
  //   hourlyWageTen();
  //   milesDrivenTen();
  //   irsTen();
  //   wageIrsTen();

  //   if ($scope.resultsChart !== display) {
  //     d3.select('.chartContainer g')
  //       .selectAll('*')
  //       .remove();
  //   }

  //   if (display === 'roundTripBars') {
  //     drawRoundTripBars();
  //   } else if (display === 'weekTripBars') {
  //     drawRoundTripBars();
  //   } else if (display === 'tenTripBars') {
  //     drawTenTripBars();
  //   };

  //   //can i get these to display just all in one chart or should we do three separate charts?

  //   $scope.resultsChart = display;
  // };

  $scope.submitData = function(display) {
    
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
    wageIrsRound();
    actualRound();
    wageActualRound();
    avgRound();
    wageAverageRound();

    minsWeek();
    hoursWeek();
    eightHourWeek();
    fortyHourWeek();
    hourlyWageWeek();
    milesDrivenWeek();
    irsWeek();
    wageIrsWeek();
    actualWeek();
    wageActualWeek();
    avgWeek();
    wageAverageWeek();

    minsTen();
    hoursTen();
    eightHourTen();
    fortyHourTen();
    hourlyWageTen();
    milesDrivenTen();
    irsTen();
    wageIrsTen();
    actualTen();
    wageActualTen();
    avgTen();
    wageAverageTen();

    if ($scope.resultsChart !== display) {
      d3.select('.chartContainer g')
        .selectAll('*')
        .remove();
    }

    if (display === 'pie') {
      drawPieChart();
    } else if (display === 'roundTripBars') {
      drawRoundTripBars();
    } else if (display === 'weekTripBars') {
      drawWeekTripBars();
    } else if (display === 'tenTripBars') {
      drawTenTripBars();
    };

    $scope.resultsChart = display;
  };


  $scope.returnHome = function() {
    $scope.resultsChart = "home";
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
    	if ($scope.wageIrsTen > 50000){
    		$('.modal').modal('toggle');
  		}
  };

  var wageActualTen = function() {
    $scope.wageActualTen = $scope.hourlyWageTen + $scope.actualTen;
    // if ($scope.wageIrsTen > 50000){
    // 		$('.modal').modal('toggle');
  		// }
  };

  var wageAverageTen = function() {
    $scope.wageAverageTen = $scope.hourlyWageTen + $scope.avgTen;
    // if ($scope.wageIrsTen > 50000){
    // 		$('.modal').modal('toggle');
  		// }
  };

  var drawPieChart = function() {
debugger
console.log("pooty");
    var data = [$scope.carGasAns, $scope.tire, $scope.oil, $scope.maint, $scope.ins];
    var r = 200;

    var color = d3.scale.ordinal()
      .range(["#6AFCFB", "#FE792C", "#FE1B10", "#C6EE2B", "#FF6BCC"]);

    // var container = d3.select(".chartContainer")
    // container.innerHTML = ''

    // var canvas = container.append("svg")
    //   .attr("width", 400)
    //   .attr("height", 400);

    // var group = canvas.append("g")
    //   .attr("transform", "translate(200, 200)");

    var arc = d3.svg.arc()
      .innerRadius(0)
      .outerRadius(r);

    var pie = d3.layout.pie()
      .value(function(d) {
        return d;
      });

    var arcs = $scope.chartSVGGroup.selectAll(".arc")
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
    var dataArray = [$scope.wageIrsRound, $scope.wageAverageRound, $scope.wageActualRound];

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

    var bars = $scope.chartSVGGroup.selectAll("rect")
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

    $scope.chartSVGGroup.append("g")
      .attr("transform", "translate(0, 370)")
      .call(axis);
  };

  var drawWeekTripBars = function() {

    var dataArray = [$scope.wageIrsWeek, $scope.wageAverageWeek, $scope.wageActualWeek];

    var width = 500;
    var height = 500;

    var widthScale = d3.scale.linear()
      .domain([d3.min(dataArray) * 0.9, d3.max(dataArray) * 1.1])
      .range([0, width]);

    var color = d3.scale.linear()
      .domain([d3.min(dataArray) * 0.9, d3.max(dataArray) * 1.1])
      .range(["red", "black"]);

    var axis = d3.svg.axis()
      .ticks(5)
      .scale(widthScale);

    var bars = $scope.chartSVGGroup.selectAll("rect")
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
      .transition(1500)
      .attr("width", function(d) {
        console.log(widthScale(d), widthScale.range());
        return widthScale(d);
      });

    $scope.chartSVGGroup.append("g")
      .attr("transform", "translate(0, 370)")
      .call(axis);
  };

  var drawTenTripBars = function() {

    var dataArray = [$scope.wageIrsTen, $scope.wageAverageTen, $scope.wageActualTen];

    var width = 500;
    var height = 500;

    var widthScale = d3.scale.linear()
      .domain([d3.min(dataArray) * 0.9, d3.max(dataArray) * 1.1])
      .range([0, width]);

    var color = d3.scale.linear()
      .domain([d3.min(dataArray) * 0.9, d3.max(dataArray) * 1.1])
      .range(["red", "gray"]);

    var axis = d3.svg.axis()
      .ticks(5)
      .scale(widthScale);

    var bars = $scope.chartSVGGroup.selectAll("rect")
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

    $scope.chartSVGGroup.append("g")
      .attr("transform", "translate(0, 370)")
      .call(axis);
  };


});