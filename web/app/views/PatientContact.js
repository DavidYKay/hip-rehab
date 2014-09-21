'use strict';

angular.module('myApp.PatientContact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/PatientContact', {
    templateUrl: 'views/PatientContact.html',
    controller: 'PatientContactCtrl'
  });
}])

.controller('PatientContactCtrl', [function() {

}]);
