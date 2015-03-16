var app = angular.module('CommuteCalculator', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'js/home/homeTmpl.html',
			controller: 'homeCtrl'
		})
		.when('/products/:id', {
			templateUrl: 'js/products/productTmpl.tmpl',
			controller: 'productsCtrl'
		})
		.when('/settings', {
			templateUrl: 'js/settings/settingsTmpl.html',
			controller: 'settingsCtrl'
		})
		.otherwise({
			redirectTo: '/'
		})
});