(function() {
    'use strict';

    var appControllers = angular.module('app.controllers', []);

    appControllers.controller('BaseCtrl', ['$firebaseAuth', 'authService', function($firebaseAuth, authService) {
        let ref = new Firebase("https://todo-app-core.firebaseio.com");
        let auth = $firebaseAuth(ref);
        let authData = ref.getAuth();

        let vm = this;

        vm.provider = 'Not logged in.';
        vm.loginTwitter = loginTwitter;
        vm.logout = logout;

        setLoggedInInfo(authData);

        function loginTwitter() {
            authService.loginTwitter().then(function(authData) {
                setLoggedInInfo(authData);
            }).catch(function(error) {
                console.log("Authentication failed:", error);
            });
        }

        function logout() {
            authService.logout();
            vm.provider = 'Not logged in.';
        }

        function setLoggedInInfo(authData){
            if(authData !== null && authData.uid !== null) {
                vm.provider = 'Logged in with ' + authData.provider;

                console.log("Authenticated successfully with payload:", authData);
                console.log("User " + authData.uid + " is logged in with " + authData.provider);
            }
        }
    }]);
}());