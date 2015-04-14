(function() {
    'use strict';

    angular
        .module('app')
        .controller('TodoCtrl', TodoCtrl);

    TodoCtrl.$inject = ['FIREBASE_URL', 'authService'];

    function TodoCtrl(FIREBASE_URL, authService) {
        let vm = this;
        //let ref = new Firebase(FIREBASE_URL);
        //let authData = ref.getAuth();

        vm.input = '';
        vm.submit = submit;
        vm.todos = [
            { value: 'todo 1' },
            { value: 'todo 2' },
            { value: 'todo 3' },
            { value: 'todo 4' }
        ];

        function submit(isValid) {
            if (isValid) {
                vm.todos.push({ value: vm.input });
                vm.input = '';
            }
        }
    }
}());