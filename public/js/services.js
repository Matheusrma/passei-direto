'use strict';

/* Services */
var services = angular.module('passeiDiretoApp.services', ['ngResource']);

services.factory('Album', ['$resource', 
  function($resource) {
    return $resource('api/albums/:albumId', {albumId:'@id'}, {
      query: {method:'GET', isArray:true},
      update: {method: "PUT"},
      delete: { method: 'DELETE'}
    });
}]);