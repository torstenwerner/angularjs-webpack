'use strict';
export default class HomeController {
    constructor(randomNames) {
        this.name = 'World';
        this.random = randomNames;
    }

    changeName() {
        console.log('change name');
        this.name = 'angular-tips';
    }

    randomName(){
        this.name = this.random.getName();
    }
}

HomeController.$inject = ['randomNames'];
