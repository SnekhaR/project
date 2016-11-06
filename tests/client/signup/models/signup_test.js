'use strict';

describe('signup', function() {
  var _signup;

  beforeEach(module('MyApp'));

  beforeEach(inject(function($injector) {
    _signup = $injector.get('signup');
  }));

  describe('creation', function() {
    it('return a function', function() {
      expect(typeof _signup).toBe('function');
    });
  });

  describe('isValid', function() {
    it('should be valid if name and birth date is setted', function() {
      var m = new _signup();
      m.name = 'Felipe Smith';
      m.birthDate = new Date();

      expect(m.isValid()).toBe(true);
    });

    it('should be not valid if name or birth date is not setted', function () {
      var m1 = new _signup();
      expect(m1.isValid()).toBe(false);

      var m2 = new _signup();
      m2.birthDate = new Date();
      expect(m2.isValid()).toBe(false);

      var m3 = new _signup();
      m3.name = 'Felipe Smith';
      expect(m3.isValid()).toBe(false);
    })
  })
});
