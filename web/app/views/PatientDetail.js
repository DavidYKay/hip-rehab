'use strict';

angular.module('myApp.PatientDetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/PatientDetail', {
    templateUrl: 'views/PatientDetail.html',
    controller: 'PatientDetailCtrl'
  });
}])

.controller('PatientDetailCtrl', [function() {

}]);
