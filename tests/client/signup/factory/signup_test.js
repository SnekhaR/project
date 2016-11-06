'use strict';

describe('Signup', function() {
    var _Signup;

    beforeEach(module('MyApp'));

    beforeEach(inject(function($injector) {
      _Signup = $injector.get('Signup');
    }));

    describe('instance', function() {
      it('should have the right prop for the instance', function() {
          var _something = new _Signup();

          expect(_something.something).toEqual(123);
      });
    });

    describe('isValid', function() {
      it('should return true', function() {
          var _something = new _Signup();

          expect(_something.isValid()).toBeTruthy();
      });
    });
});
