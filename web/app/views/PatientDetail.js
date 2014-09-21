'use strict';

angular.module('myApp.PatientDetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/patients/:id', {
    templateUrl: 'views/PatientDetail.html',
    controller: 'PatientDetailCtrl'
  });
}])

.controller('PatientDetailCtrl', [function() {

}]);
