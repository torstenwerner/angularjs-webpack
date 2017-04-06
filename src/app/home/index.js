'use strict';
import './home.scss';
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';
import randomNames from '../services/randomNames.services';
import greeting from '../directives/greeting.directive';
import member from '../directives/member/member.directive';

export default angular.module('app.home', [uirouter, randomNames, greeting,member])
        .config(routing)
        .controller('HomeController', HomeController)
        .name;
