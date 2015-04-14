(function() {
    'use strict';

    angular
        .module('app')
        .directive('todoItems', todoItems);

    function todoItems() {
        let directive = {
            replace: 'true',
            restrict: 'E',
            scope: {
                items: '='
            },
            template: [
                '<ul>',
                    '<li ng-repeat="todo in items">',
                        '{{todo.value}}',
                        '<button type="button" ng-click="items.splice($index,1)">X</button>',
                    '</li>',
                '</ul>'
            ].join('')
        };

        return directive;
    }
}());