(function () {
    'use strict';

    var app = angular.module('app', [
        'ngRoute',
        'app.controllers'
    ]);

    app.config(['$routeProvider', function($routeProvider) {
        //$locationProvider.html5Mode(true);

        $routeProvider.when('/', {
            templateUrl: 'home.html'
        });

        $routeProvider.when('/about', {
            templateUrl: 'about.html'
        });

        $routeProvider.otherwise({ redirectTo: '/' });
    }]);
}());