'use strict';

var app = angular.module('passeiDiretoApp', ['passeiDiretoApp.filters', 'passeiDiretoApp.services', 
						 'passeiDiretoApp.directives','passeiDiretoApp.Controllers','ngRoute']);

app.config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider) {
    
    $routeProvider.when('/index', {templateUrl: 'partial/main'});
    $routeProvider.when('/newalbum', {templateUrl: 'partial/newalbum'});
    $routeProvider.when('/album/:albumId', {templateUrl: 'partial/album'});
    $routeProvider.otherwise({redirectTo: '/index'});
    
    $locationProvider.html5Mode(true);
  }]);
