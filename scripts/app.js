var app = angular.module('fmcom', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		'templateUrl': 'views/videos.html',
		'controller': 'videosController'
	})
	.otherwise({
		redirectTo: '/'
	});
});