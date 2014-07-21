'use strict';

/* Controllers */

angular.module('passeiDiretoApp.Controllers', [])
.controller('MainCtrl', ['$scope', 'Album' , function($scope, Album){

  $scope.libraries = [];

  $scope.libraries.push({});
  $scope.libraries[0].name = 'My Library';

  $scope.libraries[0].albums = Album.query();

}])
.controller('NewAlbumCtrl', ['$scope', '$location', 'Album' , function($scope, $location, Album){

  $scope.album = new Album();

  $scope.add = function(){
    $scope.album.$save();
    $location.path('/index')
  }

}])
.controller('AlbumCtrl', ['$scope', '$location', '$routeParams', 'Album' , function($scope, $location,$routeParams, Album){

  $scope.album = Album.get({albumId: $routeParams.albumId}, function(album) {
  });

  $scope.update = function(){
    $scope.album.$update();
    $location.path('/index');
  }

  $scope.delete = function(){
    Album.delete({albumId:$scope.album._id});
    $location.path('/index');
  }
}]);
