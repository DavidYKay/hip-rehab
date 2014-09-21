'use strict';

angular.module('myApp.PatientContact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/patients/:patientId/contact', {
    templateUrl: 'views/PatientContact.html',
    controller: 'PatientContactCtrl'
  });
}])

.controller('PatientContactCtrl', function PatientContactCtrl($scope, $routeParams, $firebase, Page) {

  $scope.patientId = $routeParams.patientId;

  var url = "https://glowing-fire-8184.firebaseio.com/patients/" + $scope.patientId;
  var ref = new Firebase(url);

  var sync = $firebase(ref);
  var patient = sync.$asObject();
  // synchronize the object with a three-way data binding
  patient.$bindTo($scope, "patient");

});
