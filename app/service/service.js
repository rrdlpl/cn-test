'use strict';

angular.module('cn.service', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/service', {
    templateUrl: 'service/index.html',
    controller: 'ServiceController'
  });
}])

.controller('ServiceController', [function() {

}]);
