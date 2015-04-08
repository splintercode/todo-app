(function () {
    'use strict';

    let app = angular.module('app', [
        'ngRoute',
        'firebase',
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

    app.run(['$rootScope', '$location', 'authService', function ($rootScope, $location, authService) {
        $rootScope.$on('$routeChangeStart', function (event) {
            if (!authService.isLoggedIn()) {
                console.log('DENY');
                event.preventDefault();
                $location.path('/login');
            }
            else {
                console.log('ALLOW');
                $location.path('/home');
            }
        });
    }]);
}());