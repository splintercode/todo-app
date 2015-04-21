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
                '<ul class="todo-list">',
                    '<li ng-repeat="todo in items" class="todo-list__item repeat-animation">',
                        '{{todo.value}}',
                        '<button type="button" ng-click="items.$remove($index)" class="todo-list__btn">X</button>',
                    '</li>',
                '</ul>'
            ].join('')
        };

        return directive;
    }
}());