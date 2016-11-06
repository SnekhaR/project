
;(function(ng) {
  'use strict';

  ng.module('MyApp')
    .factory('SignupResource', [
      '$resource',
      function($resource) {
		  console.log($resource);
        var _url = '/api/signup';
        var _params = {};
        var _methods = {};

        return $resource(_url, _params, _methods);
      }
    ]);

}(window.angular));

