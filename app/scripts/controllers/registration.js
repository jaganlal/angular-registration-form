'use strict';

/**
 * @ngdoc function
 * @name registrationApp.controller:RegistrationCtrl
 * @description
 * # MainCtrl
 * Controller of the registrationApp
 */
angular.module('registrationApp')
  .controller('RegistrationCtrl', [function () {

  	this.placeHolderText = {
  		email: "Email",
      password: "Password",
      confirmPassword: "ReEnter Password"
  	}
  }]);
