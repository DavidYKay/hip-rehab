'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.Dashboard',
  'myApp.PatientContact',
  'myApp.PatientDetail',
  'myApp.PatientList',
  'myApp.version'
]);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/dashboard'});
}]);

app.factory('Page', function(){
  var title = 'Knife to 5K';
  return {
    title: function() { return title; },
    setTitle: function(newTitle) { title = newTitle; }
  };
});
