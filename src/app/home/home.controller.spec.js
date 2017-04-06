'use strict';
import home from './index';

describe('Controller: Home', function ()
{
    let $controller;
    let randomNames;
    let ctrl;

    beforeEach(angular.mock.module(home));
    beforeEach(angular.mock.inject(function(_$controller_,_randomNames_){
        $controller = _$controller_;
        randomNames = _randomNames_;
        spyOn(randomNames,'getName').and.returnValue('John');
        ctrl = $controller('HomeController',{ randomNames: randomNames});
    }));

    it('should name is initialize to World', function ()
    {
        expect(ctrl.name).toBe('World');
    });

    describe('changeName', function ()
    {
        beforeEach(function ()
        {
            ctrl.changeName();
        });

        it('should set name', function ()
        {
            expect(ctrl.name).toBe('angular-tips');
        });
    });

    describe('randomName', function ()
    {
        beforeEach(function ()
        {
            ctrl.randomName();
        });
        it('should call getName', function ()
        {
            expect(randomNames.getName).toHaveBeenCalled();
        });
        it('should set name', function ()
        {
            expect(ctrl.name).toBe('John');
        });
    });
});
