'use strict'

angular.module('cn.blog', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when("/blog", {
      templateUrl: 'blog/index.html',
      controller: 'BlogController'
    })
  }])
  .controller('BlogController', [function() {
    //Controller - logic...
    this.load = function() {
      //Load blogs function....
    };

  }]);
