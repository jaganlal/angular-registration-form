'use strict';

/**
 * @ngdoc function
 * @name registrationApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the registrationApp
 */
angular.module('registrationApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
