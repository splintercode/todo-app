(function() {
    'use strict';

    angular
        .module('app')
        .factory('todoService', todoService);

    todoService.$inject = ['$firebaseArray', 'FIREBASE_URL'];

    function todoService($firebaseArray, FIREBASE_URL) {
        let ref = new Firebase(FIREBASE_URL);
        let authData = ref.getAuth();
        let todosRef = new Firebase(FIREBASE_URL + '/users/' + authData.uid + '/todos');

        let todoService = {
            getTodosRef: getTodosRef
        };

        return todoService;

        function getTodosRef() {
            return $firebaseArray(todosRef);
        }
    }
}());