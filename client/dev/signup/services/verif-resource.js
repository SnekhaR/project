
;(function(ng) {
  'use strict';

  ng.module('MyApp')
    .factory('VerifResource', [
      '$resource',
      function($resource) {
        console.log('from verif-resource');
		  console.log($resource);
      
        var _url = '/api/verif';
        var _params = {};
        
        
        var _methods = {};
       console.log('going to send');
       return $resource(_url, _params, _methods );
      }
    ]);

}(window.angular));

