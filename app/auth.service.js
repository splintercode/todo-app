(function() {
    'use strict';

    angular
        .module('app')
        .factory('authService', authService);

    authService.$inject = ['$firebaseAuth', 'FIREBASE_URL'];

    function authService($firebaseAuth, FIREBASE_URL) {
        let ref = new Firebase(FIREBASE_URL);
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

                console.log("Authenticated successfully with payload:", authData);
                console.log("User " + authData.uid + " is logged in with " + authData.provider);

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