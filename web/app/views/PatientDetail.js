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

    var url = "https://glowing-fire-8184.firebaseio.com/patients/" + $scope.patientId;
    var ref = new Firebase(url);
    var sync = $firebase(ref);
    var patient = sync.$asObject();

    console.log("patient: " + patient);

    patient.$bindTo($scope, "patient");


    $scope.isSuccess = function(trial) {
      return true;
    };

    $scope.$watch('patient', function(newValue, oldValue) {
      var trials = [];
      for (var trialDate in $scope.patient.rom) {
	var trial = $scope.patient.rom[trialDate];
	trials.push({
	  date: trialDate,
	  results: trial
	});
      }
      $scope.trials = trials;
    });
    //var newPatient = $scope.patient;
    //var nestedPatient = $scope.patient.patient;

    //console.log("newPatient: " + newPatient);
    //console.log("nestedPatient: " + nestedPatient);



  }
);
