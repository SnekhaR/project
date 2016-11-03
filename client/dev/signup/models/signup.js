;(function(ng) {
  'use strict';

  ng.module('MyApp')
    .factory('signup', [
      function() {
        var signup = function() {
          this.name = '';
          this.birthDate = null;
        };

        signup.prototype.isValid = function() {
          return !!this.name && !!this.birthDate;
        };

        return signup;
      }
    ]);
}(window.angular));
