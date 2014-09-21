'use strict';

angular.module('myApp.PatientList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/patients', {
    templateUrl: 'views/PatientList.html',
    controller: 'PatientListCtrl'
  });
}])

.controller('PatientListCtrl', function PatientListCtrl($scope, Page) {
  Page.setTitle('Patient List');
  $scope.patients = [
    {name: "Suzie Q", id: 1},
    {name: "Joe Bloggs", id: 2},
    {name: "David Kay", id: 3},
  ];
}
);
