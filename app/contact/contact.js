'use strict'

angular.module('cn.contact', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when("/contact", {
      templateUrl: 'contact/index.html',
      controller: 'ContactController'
    });
  }])
  .controller('ContactController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {


  }]);
