(function() {
    'use strict';

    angular
        .module('app')
        .controller('TodoController', TodoController);

    TodoController.$inject = ['todoService'];

    function TodoController(todoService) {
        let vm = this;

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
}());