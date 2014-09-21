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
  // $scope.patients = [
  //   {name: "Suzie Q", id: 1},
  //   {name: "Joe Bloggs", id: 2},
  //   {name: "David Kay", id: 3},
  // ];


  var ref = new Firebase("https://glowing-fire-8184.firebaseio.com/patients");
  // create an AngularFire reference to the data
  var sync = $firebase(ref);
  // download the data into a local object
  var syncObject = sync.$asObject();
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");
  $scope.patients = sync.$asArray();

}
);
