'use strict'

angular.module('cn.help', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/help', {
     templateUrl: 'help/index.html',
     controller: 'HelpController'
  });
}])
.controller('HelpController', [function () {
  // body...
}]);
