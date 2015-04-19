(function() {
    'use strict';

    angular
        .module('app')
        .controller('TodoCtrl', TodoCtrl);

    TodoCtrl.$inject = ['todoService'];

    function TodoCtrl(todoService) {
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