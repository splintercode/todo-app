'use strict';

(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute', 'ngTouch', 'ngAnimate', 'firebase']);

    app.constant('FIREBASE_URL', 'https://todo-app-core.firebaseio.com');

    app.config(['$routeProvider', function ($routeProvider) {
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

        $routeProvider.otherwise({ redirectTo: '/' });
    }]);

    app.run(['$rootScope', '$location', 'authService', function ($rootScope, $location, authService) {
        $rootScope.$on('$routeChangeStart', function () {
            if (!authService.isLoggedIn()) {
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
                usersRef.child('authData').set(authData); // Save user data

                //console.log("Authenticated successfully with payload:", authData);
                //console.log("User " + authData.uid + " is logged in with " + authData.provider);

                return authData;
            })['catch'](function (error) {
                return console.log('Authentication failed:', error);
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

    BaseCtrl.$inject = ['$location', '$rootScope', 'FIREBASE_URL', 'authService'];

    function BaseCtrl($location, $rootScope, FIREBASE_URL, authService) {
        var vm = this;
        var ref = new Firebase(FIREBASE_URL);
        var authData = ref.getAuth();

        vm.isAuthenticated = false;
        vm.provider = 'Not logged in';
        vm.login = login;
        vm.logout = logout;
        vm.toggleNav = toggleNav;

        setLoggedInInfo(authData);

        function login(provider) {
            authService.login(provider).then(function (authData) {
                setLoggedInInfo(authData);
                $location.path('/');
            })['catch'](function (error) {
                return console.log('Authentication failed:', error);
            });
        }

        function logout() {
            $location.path('/');
            authService.logout();

            vm.provider = 'Not logged in';
            vm.isAuthenticated = false;
        }

        function setLoggedInInfo(authData) {
            if (authData !== null && authData.uid !== null) {
                vm.provider = 'Logged in with ' + authData.provider;
                vm.isAuthenticated = true;
            }
        }

        function toggleNav() {
            vm.showNav = !vm.showNav;
        }

        $rootScope.$on('$locationChangeStart', function () {
            return vm.showNav = false;
        });
    }
})();
(function () {
    'use strict';

    angular.module('app').controller('TodoController', TodoController);

    TodoController.$inject = ['todoService'];

    function TodoController(todoService) {
        var vm = this;

        vm.todos = todoService.getTodosRef();
        vm.addTodo = addTodo;
        vm.input = '';

        function addTodo(isValid) {
            if (isValid) {
                vm.todos.$add({
                    value: vm.input
                });

                vm.input = '';
            }
        }
    }
})();
(function () {
    'use strict';

    angular.module('app').factory('todoService', todoService);

    todoService.$inject = ['$firebaseArray', 'FIREBASE_URL'];

    function todoService($firebaseArray, FIREBASE_URL) {
        var ref = new Firebase(FIREBASE_URL);
        var authData = ref.getAuth();
        var todosRef = new Firebase(FIREBASE_URL + '/users/' + authData.uid + '/todos');

        var todoService = {
            getTodosRef: getTodosRef
        };

        return todoService;

        function getTodosRef() {
            return $firebaseArray(todosRef);
        }
    }
})();
(function () {
    'use strict';

    angular.module('app').directive('todoItems', todoItems);

    function todoItems() {
        var directive = {
            replace: 'true',
            restrict: 'E',
            scope: {
                items: '='
            },
            templateUrl: 'app/todo/todo-list.directive.html',
            controller: TodoItemsController,
            controllerAs: 'vm',
            bindToController: true // because the scope is isolated
        };

        return directive;

        function TodoItemsController() {
            var vm = this;

            vm.removeTodo = removeTodo;
            vm.saveTodo = saveTodo;

            function removeTodo($index) {
                vm.items.$remove($index);
            }

            function saveTodo(todo) {
                vm.items.$save(todo).then(function (data) {
                    return console.log(data);
                });
            }
        }
    }
})();