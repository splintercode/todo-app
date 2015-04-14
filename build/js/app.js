'use strict';

(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute', 'firebase']);

    app.constant('FIREBASE_URL', 'https://todo-app-core.firebaseio.com');

    app.config(['$routeProvider', function ($routeProvider) {
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

        $routeProvider.when('/todos', {
            templateUrl: 'app/views/todos.html'
        });

        $routeProvider.otherwise({ redirectTo: '/' });
    }]);

    app.run(['$rootScope', '$location', 'authService', function ($rootScope, $location, authService) {
        $rootScope.$on('$routeChangeStart', function (event, next, current) {
            if (!authService.isLoggedIn()) {
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

    authService.$inject = ['$firebaseAuth', 'FIREBASE_URL'];

    function authService($firebaseAuth, FIREBASE_URL) {
        var ref = new Firebase(FIREBASE_URL);
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

                console.log('Authenticated successfully with payload:', authData);
                console.log('User ' + authData.uid + ' is logged in with ' + authData.provider);

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

    angular.module('app').controller('BaseCtrl', BaseCtrl);

    BaseCtrl.$inject = ['$location', 'FIREBASE_URL', 'authService'];

    function BaseCtrl($location, FIREBASE_URL, authService) {
        var vm = this;
        var ref = new Firebase(FIREBASE_URL);
        var authData = ref.getAuth();

        vm.isAuthenticated = false;
        vm.provider = 'Not logged in';
        vm.login = login;
        vm.logout = logout;

        setLoggedInInfo(authData);

        function login(provider) {
            authService.login(provider).then(function (authData) {
                setLoggedInInfo(authData);
                $location.path('/todos');
            })['catch'](function (error) {
                console.log('Authentication failed:', error);
            });
        }

        function logout() {
            authService.logout();
            vm.provider = 'Not logged in';
            vm.isAuthenticated = false;

            $location.path('/');
        }

        function setLoggedInInfo(authData) {
            if (authData !== null && authData.uid !== null) {
                vm.provider = 'Logged in with ' + authData.provider;
                vm.isAuthenticated = true;
            }
        }
    }
})();
(function () {
    'use strict';

    angular.module('app').controller('TodoCtrl', TodoCtrl);

    TodoCtrl.$inject = ['FIREBASE_URL', 'authService'];

    function TodoCtrl(FIREBASE_URL, authService) {
        var vm = this;
        //let ref = new Firebase(FIREBASE_URL);
        //let authData = ref.getAuth();

        vm.input = '';
        vm.submit = submit;
        vm.todos = [{ value: 'todo 1' }, { value: 'todo 2' }, { value: 'todo 3' }, { value: 'todo 4' }];

        function submit(isValid) {
            if (isValid) {
                vm.todos.push({ value: vm.input });
                vm.input = '';
            }
        }
    }
})();
(function () {
    'use strict';

    angular.module('app').directive('todoItem', todoItem);

    function todoItem() {
        var directive = {
            link: link,
            replace: 'true',
            template: '<li>{{todo.value}}</li>',
            restrict: 'E',
            scope: {
                todo: '='
            }
        };

        return directive;

        function link(scope, element, attrs) {}
    }
})();