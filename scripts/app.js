var app = angular.module('fmcom', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		'templateUrl': 'views/home.html',
		'controller': 'homeController'
	})
	.otherwise({
		redirectTo: '/'
	});
});