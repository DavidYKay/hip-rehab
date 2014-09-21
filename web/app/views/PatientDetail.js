'use strict';

angular.module('myApp.PatientDetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/patients/:patientId', {
    templateUrl: 'views/PatientDetail.html',
    controller: 'PatientDetailCtrl'
  });
}])

.controller('PatientDetailCtrl',
  function PatientDetailCtrl($scope, $routeParams, $firebase, Page) {

    $scope.patientId = $routeParams.patientId;

    //$scope.patient = {name: "David Kay", id: 3};
    Page.setTitle('Patient Detail');

    var ref = new Firebase("https://glowing-fire-8184.firebaseio.com/data");
    var sync = $firebase(ref);
    var syncObject = sync.$asObject();
    // synchronize the object with a three-way data binding
    syncObject.$bindTo($scope, "data");

  }
);
