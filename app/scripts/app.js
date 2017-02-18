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
			name: 'home',
			templateUrl: 'views/main.html',
			controller: 'MainCtrl',
		})
		.state('about', {
			url: '/about',
			name: 'about',
			templateUrl: 'views/about.html',
			controller: 'AboutCtrl'
		})		
		.state('contact', {
			url: '/contact',
			name: 'contact',
			templateUrl: 'views/contact.html',
			controller: 'contactCtrl'
		})
});

angular.module('crazylabApp').run(function($state, $rootScope){

	$rootScope.setup = {
		navigation: $state.get()
	};
});