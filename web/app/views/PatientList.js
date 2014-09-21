'use strict';

angular.module('myApp.PatientList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/patients', {
    templateUrl: 'views/PatientList.html',
    controller: 'PatientListCtrl'
  });
}])

.controller('PatientListCtrl', function PatientListCtrl($scope, $firebase, Page) {
  Page.setTitle('Patient List');


  var ref = new Firebase("https://glowing-fire-8184.firebaseio.com/patients");
  // create an AngularFire reference to the data
  var sync = $firebase(ref);
  // download the data into a local object
  var syncObject = sync.$asObject();
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  //syncObject.$bindTo($scope, "data");
  $scope.patients = sync.$asArray();

  $scope.getImagePath = function(result) {
    if (result) {
      return "img/green-check.png";
    } else {
      return "img/red-x.png";
    }
  };

  $scope.getResults = function(patient) {

    if (patient.id == "1") {

    return [
      {id: 1, result: true},
      {id: 2, result: true},
      {id: 3, result: true}
    ];

    } else if (patient.id == "2") {

    return [
      {id: 1, result: false},
      {id: 2, result: false},
      {id: 3, result: true}
    ];

    } else {
    return [
      {id: 1, result: false},
      {id: 2, result: false},
      {id: 3, result: false}
    ];
    }
  };
});
