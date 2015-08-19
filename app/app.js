'use strict';

// Declare app level module which depends on views, and components
angular.module('cn', [
  'ngRoute',
  'cn.service',
  'cn.blog',
  'cn.facilities',
  'cn.contact',
  'cn.help',
  'cn.home'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({
    redirectTo: '/home'
  });
}])
.directive('cnNavbar', function (){
  return {
    templateUrl : 'cn-components/cn-navbar.html',
    restrict: 'E'
  }
})
.directive('cnFooter', function (){
  return {
    templateUrl : 'cn-components/cn-footer.html',
    restrict: 'E'
  }
});
