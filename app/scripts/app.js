'use strict';

/**
* @ngdoc overview
* @name crazylabApp
* @description
* # crazylabApp
*
* Main module of the application.
*/
angular.module('crazylabApp', [
	'ngAnimate',
	'ngCookies',
	'ngMessages',
	'ngResource',
	'ui.router',
	'ngSanitize',
	'ngTouch',
	'ngMaterial'
])
.config(function ($stateProvider, $locationProvider, $mdThemingProvider) {
	
	$mdThemingProvider.theme('default').dark();

	$locationProvider.html5Mode(true);

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/main.html',
			controller: 'MainCtrl',
		})
		.state('about', {
			url: '/about',
			templateUrl: 'views/about.html',
			controller: 'AboutCtrl'
		})

	// .when('/', {
	// 	templateUrl: 'views/main.html',
	// 	controller: 'MainCtrl',
	// 	controllerAs: 'main'
	// })
	// .when('/about', {
	// 	templateUrl: 'views/about.html',
	// 	controller: 'AboutCtrl',
	// 	controllerAs: 'about'
	// })
	// .otherwise({
	// 	redirectTo: '/'
	// });
});
