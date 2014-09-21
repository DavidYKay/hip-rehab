'use strict';

angular.module('myApp.PatientContact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/patients/:id/contact', {
    templateUrl: 'views/PatientContact.html',
    controller: 'PatientContactCtrl'
  });
}])

.controller('PatientContactCtrl', [function() {

}]);
