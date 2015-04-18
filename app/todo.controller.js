(function() {
    'use strict';

    angular
        .module('app')
        .controller('TodoCtrl', TodoCtrl);

    TodoCtrl.$inject = ['$firebaseArray', 'FIREBASE_URL', 'authService'];

    function TodoCtrl($firebaseArray, FIREBASE_URL, authService) {
        let vm = this;

        let ref = new Firebase(FIREBASE_URL);
        let authData = ref.getAuth();
        let todosRef = new Firebase(FIREBASE_URL + '/users/' + authData.uid + '/todos');

        vm.input = '';
        vm.submit = submit;
        vm.todos = $firebaseArray(todosRef);

        function submit(isValid) {
            if (isValid) {
                vm.todos.$add({
                    value: vm.input
                });

                vm.input = '';
            }
        }
    }
}());