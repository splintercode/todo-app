'use strict';

(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute', 'ngTouch',
    //'ngAnimate',
    'firebase']);

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
                usersRef.child('authData').set(authData); // Save user data

                //console.log("Authenticated successfully with payload:", authData);
                //console.log("User " + authData.uid + " is logged in with " + authData.provider);

                return authData;
            })['catch'](function (error) {});
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
            return $firebaseArray(todosRef);;
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

        function toggleNav() {
            vm.showNav = !vm.showNav;
        }

        $rootScope.$on('$locationChangeStart', function () {
            vm.showNav = false;
        });
    }
})();
(function () {
    'use strict';

    angular.module('app').controller('TodoCtrl', TodoCtrl);

    TodoCtrl.$inject = ['todoService'];

    function TodoCtrl(todoService) {
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

    angular.module('app').directive('todoItems', todoItems);

    function todoItems() {
        var directive = {
            replace: 'true',
            restrict: 'E',
            scope: {
                items: '='
            },
            template: ['<ul class="todo-list">', '<li ng-repeat="todo in vm.items" class="todo-list__item repeat-animation" ng-swipe-left="vm.removeTodo($index)" ng-swipe-right="vm.removeTodo($index)">', '<form ng-show="editingTodo" ng-submit="editingTodo = !editingTodo" class="input-group" novalidate>', '<input type="text" ng-model="todo.value" ng-change="vm.saveTodo(todo)" />', '<button type="submit">Save</button>', '</form>', '<div ng-hide="editingTodo">', '<div ng-click="editingTodo = !editingTodo">{{todo.value}}</div>', '<button ng-click="vm.removeTodo($index)" class="todo-list__close-btn">x</button>', '</div>', '</li>', '</ul>'].join(''),
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
                vm.items.$save(todo).then(function () {});
            }
        }
    }
})();

//console.log("Authentication failed:", error);

// data has been saved to Firebase