(function() {
    'use strict';

    var appControllers = angular.module('app.controllers', []);

    appControllers.controller('BaseCtrl', ['$location', '$firebaseAuth', 'authService', function($location, $firebaseAuth, authService) {
        let ref = new Firebase("https://todo-app-core.firebaseio.com");
        let auth = $firebaseAuth(ref);
        let authData = ref.getAuth();

        let vm = this;

        vm.isAuthenticated = false;
        vm.provider = 'Not logged in.';
        vm.loginTwitter = loginTwitter;
        vm.logout = logout;

        setLoggedInInfo(authData);

        function loginTwitter() {
            authService.loginTwitter().then(function(authData) {
                setLoggedInInfo(authData);
                $location.path('/account');
            }).catch(function(error) {
                console.log("Authentication failed:", error);
            });
        }

        function logout() {
            authService.logout();
            vm.provider = 'Not logged in.';
            vm.isAuthenticated = false;

            $location.path('/');
        }

        function setLoggedInInfo(authData){
            if(authData !== null && authData.uid !== null) {
                vm.provider = 'Logged in with ' + authData.provider;
                vm.isAuthenticated = true;

                console.log("Authenticated successfully with payload:", authData);
                console.log("User " + authData.uid + " is logged in with " + authData.provider);
            }
        }
    }]);
}());