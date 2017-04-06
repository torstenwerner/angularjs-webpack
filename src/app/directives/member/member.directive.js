'use strict';
import './member.scss';
import angular from 'angular';

function member(){
    return {
        restrict: 'E',
        template: require('./member.html'),
        scope: {
            image: '@',
        }

    }
}

export default angular.module('directive.member',[])
        .directive('member',member)
        .name;
