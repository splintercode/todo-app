(function() {
    'use strict';

    angular
        .module('app')
        .controller('BaseCtrl', BaseCtrl);

    BaseCtrl.$inject = ['$location', '$rootScope', 'FIREBASE_URL', 'authService'];

    function BaseCtrl($location, $rootScope, FIREBASE_URL, authService) {
        let vm = this;
        let ref = new Firebase(FIREBASE_URL);
        let authData = ref.getAuth();

        vm.isAuthenticated = false;
        vm.provider = 'Not logged in';
        vm.login = login;
        vm.logout = logout;
        vm.toggleNav = toggleNav;

        setLoggedInInfo(authData);

        function login(provider) {
            authService.login(provider).then(function(authData) {
                setLoggedInInfo(authData);
                $location.path('/');
            }).catch(error => console.log('Authentication failed:', error));
        }

        function logout() {
            $location.path('/');
            authService.logout();

            vm.provider = 'Not logged in';
            vm.isAuthenticated = false;
        }

        function setLoggedInInfo(authData) {
            if (authData !== null && authData.uid !== null) {
                vm.provider = 'Logged in with ' + authData.provider;
                vm.isAuthenticated = true;
            }
        }

        function toggleNav() {
            vm.showNav = !vm.showNav;
        }

        $rootScope.$on("$locationChangeStart", () => vm.showNav = false);
    }
}());