'use strict';

angular.module('myApp.PatientDetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/patients/:id', {
    templateUrl: 'views/PatientDetail.html',
    controller: 'PatientDetailCtrl'
  });
}])

.controller('PatientDetailCtrl',
  function PatientDetailCtrl($scope) {
    $scope.patient = {name: "David Kay", id: 3};
  }
);
