;(function(ng) {
  'use strict';

  ng.module('MyApp')
    .service('signup', [
      '$q',
      function($q) {
        this.doSomething = function() {
          return $q.when({yo: '!'});
        };
      }
    ]);
}(window.angular));
