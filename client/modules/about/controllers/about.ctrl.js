'use strict';
angular.module ('com.module.about')
/**
 * @ngdoc function
 * @name com.module.about.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
  .controller ('AboutCtrl', [
  '$scope',
  function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
]);
