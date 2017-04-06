'use strict';
import angular from 'angular';

function greeting()
{
    return {
        restrict: 'E',
        scope: {
            name: '='
        },
        template: '<h1>Hello, {{name}}</h1>'
    }
}

export default angular.module('directive.greeting', [])
        .directive('greeting', greeting)
        .name;
