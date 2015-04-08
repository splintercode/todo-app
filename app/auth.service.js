(function() {
    'use strict';

    angular
        .module('app')
        .factory('authService', authService);

    authService.$inject = ['$firebaseAuth'];

    function authService($firebaseAuth) {
        let ref = new Firebase("https://todo-app-core.firebaseio.com");
        let auth = $firebaseAuth(ref);
        let authData = ref.getAuth();

        let authService = {
            loginTwitter: loginTwitter,
            logout: logout,
            isLoggedIn: isLoggedIn
        };

        return authService;

        function loginTwitter() {
            return auth.$authWithOAuthPopup("twitter").then(function(response) {
                let usersRef = ref.child('/users/' + response.uid);
                usersRef.set(response);  // Save user data
                authData = response;

                return authData;
            }).catch(function(error) {
                console.log("Authentication failed:", error);
            });
        }

        function logout() {
            ref.unauth();
            authData = null;
        }

        function isLoggedIn() {
            if(authData !== null && authData.uid !== null) {
                return true;
            } else {
                return false;
            }
        }
    }
}());