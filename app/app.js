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
            templateUrl: 'app/views/home.html'
        });

        $routeProvider.when('/about', {
            templateUrl: 'app/views/about.html'
        });

        $routeProvider.when('/account', {
            templateUrl: 'app/views/account.html'
        });

        $routeProvider.otherwise({ redirectTo: '/' });
    }]);

    app.run(['$rootScope', '$location', 'authService', function ($rootScope, $location, authService) {
        $rootScope.$on('$routeChangeStart', function (event, next, current) {
            console.log(current);
            if (!authService.isLoggedIn() && $location.path() === '/account') {
                //event.preventDefault();
                $location.path('/');
                console.log('Route Unauthenticated');
            }  else {
                console.log('Route Authenticated');
            }
        });
    }]);
}());