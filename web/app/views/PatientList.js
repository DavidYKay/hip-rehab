'use strict';

angular.module('myApp.PatientList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/PatientList', {
    templateUrl: 'views/PatientList.html',
    controller: 'PatientListCtrl'
  });
}])

.controller('PatientListCtrl', [function() {

}]);