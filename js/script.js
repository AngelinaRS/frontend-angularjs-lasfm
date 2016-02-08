// Javascript Code.
var myApp = angular.module('app', []);

myApp.controller('PasswordController', function PasswordController($scope) {
  $scope.title = "This is AngularJS and Jasmin!";
  $scope.password = '';
  $scope.grade = function() {
    var size = $scope.password.length;
    if (size > 8) {
      $scope.strength = 'strong';
    } else if (size > 3) {
      $scope.strength = 'medium';
    } else {
      $scope.strength = 'weak';
    }
  };
});



//http://ws.audioscrobbler.com/2.0/?method=chart.getTopTracks&api_key=da38c0fa01ea26827dd79dcd3457804a&format=json