(function() {
    'use strict';

    angular
        .module('app')
        .factory('authService', authService);

    authService.$inject = ['$firebaseAuth'];

    function authService($firebaseAuth) {
        let ref = new Firebase("https://todo-app-core.firebaseio.com");
        let auth = $firebaseAuth(ref);

        let authService = {
            login: login,
            logout: logout,
            isLoggedIn: isLoggedIn
        };

        return authService;

        function login(provider) {
            return auth.$authWithOAuthPopup(provider).then(function(authData) {
                let usersRef = ref.child('/users/' + authData.uid);
                usersRef.set(authData);  // Save user data

                return authData;
            }).catch(function(error) {
                console.log("Authentication failed:", error);
            });
        }

        function logout() {
            ref.unauth();
        }

        function isLoggedIn() {
            return !!ref.getAuth();
        }
    }
}());