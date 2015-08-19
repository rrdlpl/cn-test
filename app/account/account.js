'use strict'

angular.module('cn.account',['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
   $routeProvider.when('/account/register',{
     templateUrl: '/account/register.html',
     controller : 'AccountController'
   })
   .when('/account/authenticate', {
      templateUrl: '/account/authenticate.html',
      controller: 'AccountController'
  });
}])
.controller('AccountController', [function () {
  this.authenticate = function () {
    // body...
  };

  this.register = function () {
        // body...
  };
}]);
