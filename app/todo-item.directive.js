(function() {
    'use strict';

    angular
        .module('app')
        .directive('todoItem', todoItem);

    function todoItem() {
        let directive = {
            link: link,
            replace: 'true',
            template: '<li>{{todo.value}}</li>',
            restrict: 'E',
            scope: {
                todo: '='
            }
        };

        return directive;

        function link(scope, element, attrs) {

        }
    }
}());