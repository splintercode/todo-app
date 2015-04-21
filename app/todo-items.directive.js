(function() {
    'use strict';

    angular
        .module('app')
        .directive('todoItems', todoItems);

    function todoItems() {
        let directive = {
            replace: 'true',
            restrict: 'E',
            scope: {
                items: '='
            },
            template: [
                '<ul class="todo-list">',
                    '<li ng-repeat="todo in vm.items" class="todo-list__item repeat-animation" ng-swipe-left="vm.removeTodo($index)" ng-swipe-right="vm.removeTodo($index)">',
                        '<div ng-show="editingTodo" class="input-group">',
                            '<input type="text" ng-model="todo.value" ng-change="vm.saveTodo(todo)" />',
                            '<button ng-click="editingTodo = !editingTodo">Save</button>',
                        '</div>',

                        '<div ng-hide="editingTodo">',
                            '<div ng-click="editingTodo = !editingTodo">{{todo.value}}</div>',
                            '<button ng-click="vm.removeTodo($index)" class="todo-list__close-btn">x</button>',
                        '</div>',
                    '</li>',
                '</ul>'
            ].join(''),
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
                vm.items.$remove($index)
            }

            function saveTodo(todo) {
                vm.items.$save(todo).then(function() {
                    // data has been saved to Firebase
                });
            }
        }
    }
}());