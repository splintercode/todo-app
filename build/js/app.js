'use strict';

(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute', 'firebase', 'app.controllers']);

    app.config(['$routeProvider', function ($routeProvider) {
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
            } else {
                console.log('ALLOW');
                $location.path('/home');
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
        var authData = ref.getAuth();

        var authService = {
            loginTwitter: loginTwitter,
            logout: logout,
            isLoggedIn: isLoggedIn
        };

        return authService;

        function loginTwitter() {
            return auth.$authWithOAuthPopup('twitter').then(function (response) {
                var usersRef = ref.child('/users/' + response.uid);
                usersRef.set(response); // Save user data
                authData = response;

                return authData;
            })['catch'](function (error) {
                console.log('Authentication failed:', error);
            });
        }

        function logout() {
            ref.unauth();
            authData = null;
        }

        function isLoggedIn() {
            if (authData !== null && authData.uid !== null) {
                return true;
            } else {
                return false;
            }
        }
    }
})();
(function () {
    'use strict';

    var appControllers = angular.module('app.controllers', []);

    appControllers.controller('BaseCtrl', ['$firebaseAuth', 'authService', function ($firebaseAuth, authService) {
        var ref = new Firebase('https://todo-app-core.firebaseio.com');
        var auth = $firebaseAuth(ref);
        var authData = ref.getAuth();

        var vm = this;

        vm.provider = 'Not logged in.';
        vm.loginTwitter = loginTwitter;
        vm.logout = logout;

        setLoggedInInfo(authData);

        function loginTwitter() {
            authService.loginTwitter().then(function (authData) {
                setLoggedInInfo(authData);
            })['catch'](function (error) {
                console.log('Authentication failed:', error);
            });
        }

        function logout() {
            authService.logout();
            vm.provider = 'Not logged in.';
        }

        function setLoggedInInfo(authData) {
            if (authData !== null && authData.uid !== null) {
                vm.provider = 'Logged in with ' + authData.provider;

                console.log('Authenticated successfully with payload:', authData);
                console.log('User ' + authData.uid + ' is logged in with ' + authData.provider);
            }
        }
    }]);
})();