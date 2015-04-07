(function() {
    'use strict';

    var appControllers = angular.module('app.controllers', []);

    appControllers.controller('BaseCtrl', ['$scope', '$location', function($scope, $location) {
        var vm = this;

        vm.name = 'Cory';
    }]);
}());