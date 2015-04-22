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