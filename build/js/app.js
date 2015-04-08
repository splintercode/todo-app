'use strict';

(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute', 'firebase', 'app.controllers']);

    app.config(['$routeProvider', function ($routeProvider) {
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
            } else {
                console.log('Route Authenticated');
            }
        });
    }]);
})();
(function () {
    'use strict';

    angular.module('app').factory('authService', authService);

    authService.$inject = ['$firebaseAuth'];

    function authService($firebaseAuth) {
        var ref = new Firebase('https://todo-app-core.firebaseio.com');
        var auth = $firebaseAuth(ref);

        var authService = {
            login: login,
            logout: logout,
            isLoggedIn: isLoggedIn
        };

        return authService;

        function login(provider) {
            return auth.$authWithOAuthPopup(provider).then(function (authData) {
                var usersRef = ref.child('/users/' + authData.uid);
                usersRef.set(authData); // Save user data

                return authData;
            })['catch'](function (error) {
                console.log('Authentication failed:', error);
            });
        }

        function logout() {
            ref.unauth();
        }

        function isLoggedIn() {
            return !!ref.getAuth();
        }
    }
})();
(function () {
    'use strict';

    var appControllers = angular.module('app.controllers', []);

    appControllers.controller('BaseCtrl', ['$location', '$firebaseAuth', 'authService', function ($location, $firebaseAuth, authService) {
        var ref = new Firebase('https://todo-app-core.firebaseio.com');
        var auth = $firebaseAuth(ref);
        var authData = ref.getAuth();

        var vm = this;

        vm.isAuthenticated = false;
        vm.provider = 'Not logged in.';
        vm.login = login;
        vm.logout = logout;

        setLoggedInInfo(authData);

        function login(provider) {
            authService.login(provider).then(function (authData) {
                setLoggedInInfo(authData);
                $location.path('/account');
            })['catch'](function (error) {
                console.log('Authentication failed:', error);
            });
        }

        function logout() {
            authService.logout();
            vm.provider = 'Not logged in.';
            vm.isAuthenticated = false;

            $location.path('/');
        }

        function setLoggedInInfo(authData) {
            if (authData !== null && authData.uid !== null) {
                vm.provider = 'Logged in with ' + authData.provider;
                vm.isAuthenticated = true;

                console.log('Authenticated successfully with payload:', authData);
                console.log('User ' + authData.uid + ' is logged in with ' + authData.provider);
            }
        }
    }]);
})();