var enemenApp = angular.module('enemenApp', ['ngRoute']);

enemenApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'public/vistas/inicio.html',
		controller: 'inicio',
	})
	.when('/documentacion', {
		templateUrl: 'public/vistas/documentacion.html',
		controller: 'documentacion',
	})
	.when('/resumir', {
		templateUrl: 'public/vistas/resumir.html',
		controller: 'resumir',
	})
	.otherwise({
		redirectTo: '/',
	});
},
]);

enemenApp.config(['$locationProvider', function ($locationProvider) {
	$locationProvider.html5Mode(true);
},
]);