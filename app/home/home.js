'use strict'

angular.module('cn.home', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'home/index.html',
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
    });
  }])
  .controller('HomeController', ['$scope', function($scope) {


  }])
  .directive('slider', function(){
      return {
        templateUrl: 'home/slider.html',
        restrict: 'E',
        link: function (scope, element, attrs){
          $('.slider').slider({full_width: true});        
        }
      };
  }
);
