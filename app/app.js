(function () {
    'use strict';

    let app = angular.module('app', [
        'ngRoute',
        'ngAnimate',
        'ngTouch',
        'firebase'
    ]);

    app.constant('FIREBASE_URL', 'https://todo-app-core.firebaseio.com');

    app.config(['$routeProvider', function($routeProvider) {
        //$locationProvider.html5Mode(true);

        $routeProvider.when('/', {
            templateUrl: 'app/views/home.html'
        });

        $routeProvider.when('/about', {
            templateUrl: 'app/views/about.html'
        });

        $routeProvider.when('/settings', {
            templateUrl: 'app/views/settings.html'
        });

        $routeProvider.otherwise({ redirectTo: '/' });
    }]);

    app.run(['$rootScope', '$location', 'authService', function ($rootScope, $location, authService) {
        $rootScope.$on('$routeChangeStart', function (event, next, current) {
            if (!authService.isLoggedIn()) {
                //event.preventDefault();
                $location.path('/');
                console.log('Route Unauthenticated');
            }  else {
                console.log('Route Authenticated');
            }
        });
    }]);
}());