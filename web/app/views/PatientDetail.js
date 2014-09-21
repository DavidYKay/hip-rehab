'use strict';

angular.module('myApp.PatientDetail', ['ngRoute', 'ngTable'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/patients/:patientId', {
    templateUrl: 'views/PatientDetail.html',
    controller: 'PatientDetailCtrl'
  });
}])

.controller('PatientDetailCtrl',
  function PatientDetailCtrl($scope, $routeParams, $firebase, Page, ngTableParams) {

    $scope.patients = [
{name: "Suzie Q", id: 1},
{name: "Joe Bloggs", id: 2},
{name: "David Kay", id: 3},
];


$scope.tableParams = new ngTableParams({
  page: 1,   // show first page
  count: 5  // count per page
}, {
  counts: [], // hide page counts control
  total: 1,  // value less than count hide pagination
  getData: function($defer, params) {
    //$defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
  }
});

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

    var guid = (function() {
      function s4() {
	return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
      }
      return function() {
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
      };
    })();

    var makeUuid = function() {
      return guid();
    };

    $scope.$watch('patient', function(newValue, oldValue) {
      if (newValue != null) {
	var headers = [""];

	var extension = [{id: makeUuid(), value: "Extension:"}];
	var adduction = [{id: makeUuid(), value: "Adduction:"}];
	var abduction = [{id: makeUuid(), value: "Abduction:"}];

	for (var trialDate in $scope.patient.rom) {
	  var trial = $scope.patient.rom[trialDate];

	  headers.push(trialDate);

	  extension.push({id: makeUuid(), value: trial.extension});
	  adduction.push({id: makeUuid(), value: trial.adduction});
	  abduction.push({id: makeUuid(), value: trial.abduction});
	}

	$scope.headers = headers;
	$scope.rows    = [
	  extension,
	  adduction,
	  abduction
	];
      } else {
	console.log("null value. not reacting to it.");
      }
    });

    //var newPatient = $scope.patient;
    //var nestedPatient = $scope.patient.patient;

    //console.log("newPatient: " + newPatient);
    //console.log("nestedPatient: " + nestedPatient);



  }
);
