'use strict';

angular.module('myApp.Dashboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'views/Dashboard.html',
    controller: 'DashboardCtrl'
  });
}])

.controller('DashboardCtrl', function DashboardCtrl($scope, Page) {

  $scope.pageName = "Dashboard";
  Page.setTitle('Dashboard');

});
