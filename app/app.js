(function() {
    'use strict';

    let app = angular.module('app', [
        'ngRoute',
        'ngTouch',
        //'ngAnimate',  commented out because of current bug in 1.4 r0
        'firebase'
    ]);

    app.constant('FIREBASE_URL', 'https://todo-app-core.firebaseio.com');

    app.config(['$routeProvider', function($routeProvider) {
        //$locationProvider.html5Mode(true);

        $routeProvider.when('/', {
            templateUrl: 'app/core/templates/home.html'
        });

        $routeProvider.when('/about', {
            templateUrl: 'app/core/templates/about.html'
        });

        $routeProvider.when('/settings', {
            templateUrl: 'app/core/templates/settings.html'
        });

        $routeProvider.otherwise({redirectTo: '/'});
    }]);

    app.run(['$rootScope', '$location', 'authService', function($rootScope, $location, authService) {
        $rootScope.$on('$routeChangeStart', function() {
            if (!authService.isLoggedIn()) {
                $location.path('/');
                console.log('Route Unauthenticated');
            } else {
                console.log('Route Authenticated');
            }
        });
    }]);
}());