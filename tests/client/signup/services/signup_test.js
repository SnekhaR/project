'use strict';

describe('signup', function() {
  var _signup;

  beforeEach(module('MyApp'));

  beforeEach(inject(function($injector) {
    _signup = $injector.get('signup');
  }));

  describe('doSomething', function() {
	it('should be an object', function() {
		expect(typeof _signup).toBe('object');
	})
	  
    it('should doSomething', function() {
      _signup.doSomething();
    });
  });
});
