import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.min.css';
import routing from './app.config';
import uirouter from 'angular-ui-router';
import home from './home'


import '../style/app.css';

// let app = () =>
// {
//     return {
//         template: require('./app.html'),
//         controller: 'AppCtrl',
//         controllerAs: 'app'
//     }
// };
//
// class AppCtrl {
//     constructor()
//     {
//         this.url = 'https://github.com/preboot/angular-webpack';
//     }
// }

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter,home])
        .config(routing);


export default MODULE_NAME;
