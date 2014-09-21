'use strict';

angular.module('myApp.PatientDetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/patients/:id', {
    templateUrl: 'views/PatientDetail.html',
    controller: 'PatientDetailCtrl'
  });
}])

.controller('PatientDetailCtrl',
  function PatientDetailCtrl($scope, $firebase, Page) {
    $scope.patient = {name: "David Kay", id: 3};
    Page.setTitle('Patient Detail');

    var ref = new Firebase("https://glowing-fire-8184.firebaseio.com/data");
    // create an AngularFire reference to the data
    var sync = $firebase(ref);
    // download the data into a local object
    var syncObject = sync.$asObject();
    // synchronize the object with a three-way data binding
    // click on `index.html` above to see it used in the DOM!
    syncObject.$bindTo($scope, "data");

  }
);
