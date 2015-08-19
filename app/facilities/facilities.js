'use strict';

angular.module('cn.facilities', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/facilities', {
    templateUrl: 'facilities/index.html',
    controller: 'FacilitiesController'
  });
}])

.controller('FacilitiesController', [function() {

}]);
