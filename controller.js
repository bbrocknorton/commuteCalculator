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

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
////////     	   SIMPLE     //////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

  // var initSimple = function() {
  //   $scope.milesToWorkSimple = 20;
  //   $scope.minutesToWorkSimple = 30;
  //   $scope.avgHourlyWageSimple = 12;

  //   var containerSimple = d3.select(".chartContainerSimple");
  //   $scope.chartSVGSimple = containerSimple.append("svg")
  //     .attr("width", 400)
  //     .attr("height", 400);
  //   $scope.chartSVGGroupSimple = $scope.chartSVGSimple.append("g")
  //     .attr("transform", "translate(20, 0)");

  //   var containerSimple = d3.select(".chartContainerSimple");
  //   $scope.chartSVGSimple = containerSimple.append("svg")
  //     .attr("width", 400)
  //     .attr("height", 400);
  //   $scope.chartSVGGroupSimple = $scope.chartSVGSimple.append("g")
  //     .attr("transform", "translate(20, 0)");
  // };

  // initSimple();


  // $scope.submitSimpleData = function(display) {

  //   minRoundSimple();
  //   hourRoundSimple();
  //   eightHourRoundSimple();
  //   fortyHourRoundSimple();
  //   hourlyWageRoundSimple();
  //   milesRoundSimple();
  //   irsRoundSimple();
  //   wageIrsRoundSimple();

  //   minsWeekSimple();
  //   hoursWeekSimple();
  //   eightHourWeekSimple();
  //   fortyHourWeekSimple();
  //   hourlyWageWeekSimple();
  //   milesDrivenWeekSimple();
  //   irsWeekSimple();
  //   wageIrsWeekSimple();

  //   minsTenSimple();
  //   hoursTenSimple();
  //   eightHourTenSimple();
  //   fortyHourTenSimple();
  //   hourlyWageTenSimple();
  //   milesDrivenTenSimple();
  //   irsTenSimple();
  //   wageIrsTenSimple();

  //   if ($scope.resultsChart !== display) {
  //     d3.select('.chartContainer g')
  //       .selectAll('*')
  //       .remove();
  //   }

  //   if (display === 'roundTripBarsSimple') {
  //     drawRoundTripBarsSimple();
  //   } else if (display === 'weekTripBarsSimple') {
  //     drawRoundTripBarsSimple();
  //   } else if (display === 'tenTripBarsSimple') {
  //     drawTenTripBarsSimple();
  //   };

  //   $scope.resultsChart = display;
  // };




//////////////////////////////////////////
//////////////////////////////////////////
///////////      DETAILED    /////////////
//////////////////////////////////////////
//////////////////////////////////////////

  var initDetailed = function() {
    $scope.milesToWorkDetailed = 20;
    $scope.minutesToWorkDetailed = 30;
    $scope.avgHourlyWageDetailed = 12;
    $scope.dollarPerGallonOfGasDetailed = 2;
    $scope.mpgOfCarDetailed = 20;
    $scope.costOfTiresDetailed = 400;
    $scope.milesTiresLastDetailed = 50000;
    $scope.costOfOilChangeDetailed = 32;
    $scope.milesOilChangeLastDetailed = 5000;
    $scope.costOfMaintenanceDetailed = 200;
    $scope.milesMaintenanceLastDetailed = 20000;
    $scope.costOfInsuranceEachMonthDetailed = 35;

    var containerDetailed = d3.select(".chartContainerDetailed");
    $scope.chartSVGDetailed = containerDetailed.append("svg")
      .attr("width", 400)
      .attr("height", 400);
    $scope.chartSVGGroupDetailed = $scope.chartSVGDetailed.append("g")
      .attr("transform", "translate(20, 0)");

    var containerDetailed = d3.select(".chartContainerDetailed");
    $scope.chartSVGDetailed = containerDetailed.append("svg")
      .attr("width", 400)
      .attr("height", 400);
    $scope.chartSVGGroupDetailed = $scope.chartSVGDetailed.append("g")
      .attr("transform", "translate(20, 0)");
  };

  initDetailed();

  $scope.submitDetailedData = function(display) {

    
    carGasDetailed();
    tireCalcDetailed();
    oilCalcDetailed();
    maintenanceCalcDetailed();
    insCalcDetailed();

    minRoundDetailed();
    hourRoundDetailed();
    eightHourRoundDetailed();
    fortyHourRoundDetailed();
    hourlyWageRoundDetailed();
    milesRoundDetailed();
    irsRoundDetailed();
    wageIrsRoundDetailed();
    actualRoundDetailed();
    wageActualRoundDetailed();
    avgRoundDetailed();
    wageAverageRoundDetailed();

    minsWeekDetailed();
    hoursWeekDetailed();
    eightHourWeekDetailed();
    fortyHourWeekDetailed();
    hourlyWageWeekDetailed();
    milesDrivenWeekDetailed();
    irsWeekDetailed();
    wageIrsWeekDetailed();
    actualWeekDetailed();
    wageActualWeekDetailed();
    avgWeekDetailed();
    wageAverageWeekDetailed();

    minsTenDetailed();
    hoursTenDetailed();
    eightHourTenDetailed();
    fortyHourTenDetailed();
    hourlyWageTenDetailed();
    milesDrivenTenDetailed();
    irsTenDetailed();
    wageIrsTenDetailed();
    actualTenDetailed();
    wageActualTenDetailed();
    avgTenDetailed();
    wageAverageTenDetailed();

    if ($scope.resultsChart !== display) {
      d3.select('.chartContainer g')
        .selectAll('*')
        .remove();
    }

    if (display === 'pieDetailed') {
      drawPieChartDetailed();
    } else if (display === 'roundTripBarsDetailed') {
      drawRoundTripBarsDetailed();
    } else if (display === 'weekTripBarsDetailed') {
      drawWeekTripBarsDetailed();
    } else if (display === 'tenTripBarsDetailed') {
      drawTenTripBarsDetailed();
    };

    $scope.resultsChart = display;
  };


  $scope.returnHome = function() {
    $scope.resultsChart = "home";
  };

  var actualDetailed = $scope.carGasAnsDetailed + $scope.tireDetailed + $scope.oilDetailed + $scope.maintDetailed + $scope.insDetailed;


  var carGasDetailed = function() {
    $scope.carGasAnsDetailed = $scope.dollarPerGallonOfGasDetailed / $scope.mpgOfCarDetailed;
  };

  var tireCalcDetailed = function() {
    $scope.tireDetailed = $scope.costOfTiresDetailed / $scope.milesTiresLastDetailed;
  };

  var oilCalcDetailed = function() {
    $scope.oilDetailed = $scope.costOfOilChangeDetailed / $scope.milesOilChangeLastDetailed;
  };

  var maintenanceCalcDetailed = function() {
    $scope.maintDetailed = $scope.costOfMaintenanceDetailed / $scope.milesMaintenanceLastDetailed;
  };

  var insCalcDetailed = function() {
    var milesMonthDetailed = $scope.milesToWorkDetailed * 2 * 31;
    $scope.insDetailed = $scope.costOfInsuranceEachMonthDetailed / milesMonthDetailed;
  };


  var minRoundDetailed = function() {
    $scope.minsRoundDetailed = $scope.minutesToWorkDetailed * 2;
  };

  var hourRoundDetailed = function() {
    $scope.hoursRoundDetailed = $scope.minsRoundDetailed / 60;
  };

  var eightHourRoundDetailed = function() {
    $scope.eightHourRoundDetailed = $scope.hoursRoundDetailed / 8;
  };

  var fortyHourRoundDetailed = function() {
    $scope.fortyHourRoundDetailed = $scope.eightHourRoundDetailed / 40;
  };

  var hourlyWageRoundDetailed = function() {
    $scope.hourlyWageRoundDetailed = $scope.avgHourlyWageDetailed * $scope.hoursRoundDetailed;
  };

  var milesRoundDetailed = function() {
    $scope.milesDrivenRoundDetailed = $scope.milesToWorkDetailed * 2;
  };

  var irsRoundDetailed = function() {
    $scope.irsRoundDetailed = $scope.milesDrivenRoundDetailed * .51;
  };

  var actualRoundDetailed = function() {
    var actualDetailed = $scope.carGasAnsDetailed + $scope.tireDetailed + $scope.oilDetailed + $scope.maintDetailed + $scope.insDetailed;
    $scope.actualRoundDetailed = $scope.milesDrivenRoundDetailed * actualDetailed;
  };

  var avgRoundDetailed = function() {
    $scope.avgRoundDetailed = ($scope.irsRoundDetailed + $scope.actualRoundDetailed) / 2;
  };

  var wageIrsRoundDetailed = function() {
    $scope.wageIrsRoundDetailed = $scope.irsRoundDetailed + $scope.hourlyWageRoundDetailed;
  };

  var wageActualRoundDetailed = function() {
    $scope.wageActualRoundDetailed = $scope.actualRoundDetailed + $scope.hourlyWageRoundDetailed;
  };

  var wageAverageRoundDetailed = function() {
    $scope.wageAverageRoundDetailed = $scope.avgRoundDetailed + $scope.hourlyWageRoundDetailed;
  };

  var minsWeekDetailed = function() {
    $scope.minsWeekDetailed = $scope.minsRoundDetailed * 5;
  };

  var hoursWeekDetailed = function() {
    $scope.hoursWeekDetailed = $scope.hoursRoundDetailed * 5;
  };

  var eightHourWeekDetailed = function() {
    $scope.eightHourWeekDetailed = $scope.eightHourRoundDetailed * 5;
  };

  var fortyHourWeekDetailed = function() {
    $scope.fortyHourWeekDetailed = $scope.fortyHourRoundDetailed * 5;
  };

  var hourlyWageWeekDetailed = function() {
    $scope.hourlyWageWeekDetailed = $scope.hourlyWageRoundDetailed * 5;
  };

  var milesDrivenWeekDetailed = function() {
    $scope.milesDrivenWeekDetailed = $scope.milesDrivenRoundDetailed * 5;
  };

  var irsWeekDetailed = function() {
    $scope.irsWeekDetailed = $scope.milesDrivenWeekDetailed * .51;
  };

  var actualWeekDetailed = function() {
    var actualDetailed = $scope.carGasAnsDetailed + $scope.tireDetailed + $scope.oilDetailed + $scope.maintDetailed + $scope.insDetailed;
    $scope.actualWeekDetailed = $scope.milesDrivenWeekDetailed * actualDetailed;
  };

  var avgWeekDetailed = function() {
    $scope.avgWeekDetailed = ($scope.irsWeekDetailed + $scope.actualWeekDetailed) / 2;
  };

  var wageIrsWeekDetailed = function() {
    $scope.wageIrsWeekDetailed = $scope.hourlyWageWeekDetailed + $scope.irsWeekDetailed;
  };

  var wageActualWeekDetailed = function() {
    $scope.wageActualWeekDetailed = $scope.hourlyWageWeekDetailed + $scope.actualWeekDetailed;
  };

  var wageAverageWeekDetailed = function() {
    $scope.wageAverageWeekDetailed = $scope.hourlyWageWeekDetailed + $scope.avgWeekDetailed;
  };

  var minsTenDetailed = function() {
    $scope.minsTenDetailed = $scope.minsWeekDetailed * 520;
  };

  var hoursTenDetailed = function() {
    $scope.hoursTenDetailed = $scope.hoursWeekDetailed * 520;
  };

  var eightHourTenDetailed = function() {
    $scope.eightHourTenDetailed = $scope.eightHourWeekDetailed * 520;
  };

  var fortyHourTenDetailed = function() {
    $scope.fortyHourTenDetailed = $scope.fortyHourWeekDetailed * 520;
  };

  var hourlyWageTenDetailed = function() {
    $scope.hourlyWageTenDetailed = $scope.hourlyWageWeekDetailed * 520;
  };

  var milesDrivenTenDetailed = function() {
    $scope.milesDrivenTenDetailed = $scope.milesDrivenWeekDetailed * 520;
  };

  var irsTenDetailed = function() {
    $scope.irsTenDetailed = $scope.milesDrivenTenDetailed * .51;
  };

  var actualTenDetailed = function() {
    var actualDetailed = $scope.carGasAnsDetailed + $scope.tireDetailed + $scope.oilDetailed + $scope.maintDetailed + $scope.insDetailed;
    $scope.actualTenDetailed = $scope.milesDrivenTenDetailed * actualDetailed;
  };

  var avgTenDetailed = function() {
    $scope.avgTenDetailed = ($scope.irsTenDetailed + $scope.actualTenDetailed) / 2;
  };

  var wageIrsTenDetailed = function() {
    $scope.wageIrsTenDetailed = $scope.hourlyWageTenDetailed + $scope.irsTenDetailed;
    if ($scope.wageIrsTenDetailed > 50000) {
      $('.modal').modal('toggle');
    }
  };

  var wageActualTenDetailed = function() {
    $scope.wageActualTenDetailed = $scope.hourlyWageTenDetailed + $scope.actualTenDetailed;
    if ($scope.wageIrsTenDetailed > 50000){
    		$('.modal').modal('toggle');
    }
  };

  var wageAverageTenDetailed = function() {
    $scope.wageAverageTenDetailed = $scope.hourlyWageTenDetailed + $scope.avgTenDetailed;
    if ($scope.wageIrsTenDetailed > 50000){
    		$('.modal').modal('toggle');
    }
  };

  var drawPieChartDetailed = function() {

    var data = [$scope.carGasAnsDetailed, $scope.tireDetailed, $scope.oilDetailed, $scope.maintDetailed, $scope.insDetailed];
    var r = 200;

    var color = d3.scale.ordinal()
      .range(["#6AFCFB", "#FE792C", "#FE1B10", "#C6EE2B", "#FF6BCC"]);

    var arc = d3.svg.arc()
      .innerRadius(0)
      .outerRadius(r);

    var pie = d3.layout.pie()
      .value(function(d) {
        return d;
      });

    var arcs = $scope.chartSVGGroupDetailed.selectAll(".arc")
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

  var drawRoundTripBarsDetailed = function() {
    var dataArray = [$scope.wageIrsRoundDetailed, $scope.wageAverageRoundDetailed, $scope.wageActualRoundDetailed];

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

    var bars = $scope.chartSVGGroupDetailed.selectAll("rect")
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

    $scope.chartSVGGroupDetailed.append("g")
      .attr("transform", "translate(0, 370)")
      .call(axis);
  };

  var drawWeekTripBarsDetailed = function() {


    var dataArray = [$scope.wageIrsWeekDetailed, $scope.wageAverageWeekDetailed, $scope.wageActualWeekDetailed];

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

    var bars = $scope.chartSVGGroupDetailed.selectAll("rect")
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

    $scope.chartSVGGroupDetailed.append("g")
      .attr("transform", "translate(0, 370)")
      .call(axis);
  };

  var drawTenTripBarsDetailed = function() {
  		
    var dataArray = [$scope.wageIrsTenDetailed, $scope.wageAverageTenDetailed, $scope.wageActualTenDetailed];

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

    var bars = $scope.chartSVGGroupDetailed.selectAll("rect")
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

    $scope.chartSVGGroupDetailed.append("g")
      .attr("transform", "translate(0, 370)")
      .call(axis);
  };


});