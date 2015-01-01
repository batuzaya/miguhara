'use strict';
angular.module ('com.module.users')
  .config ([
  '$stateProvider',
  function ($stateProvider) {
    $stateProvider.state ('app.users', {
      abstract: true,
      url: '/users',
      templateUrl: 'modules/users/views/main.html',
      controller: 'UsersCtrl'
    }).state ('app.users.profile', {
      url: '/profile',
      templateUrl: 'modules/users/views/profile.html',
      controller: 'UsersCtrl'
    });
  }
]);
