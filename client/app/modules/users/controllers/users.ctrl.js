'use strict';
angular.module('com.module.users')
  .controller('UsersCtrl', function ($scope, User, toasty, gettextCatalog) {

    $scope.user = User.getCurrent(function (user) {
      console.log(user);
    }, function (err) {
      console.log(err);
    });

    $scope.formFields = [
      {
        key: 'username',
        type: 'text',
        label: 'Username',
        required: true
      },
      {
        key: 'email',
        type: 'email',
        label: 'E-mail',
        required: true
      },
      {
        key: 'firstName',
        type: 'text',
        label: 'First name',
        required: true
      },
      {
        key: 'lastName',
        type: 'text',
        label: 'Last name',
        required: true
      }
    ];

    $scope.formOptions = {
      uniqueFormId: true,
      hideSubmit: false,
      submitCopy: 'Save'
    };

    $scope.onSubmit = function () {
      User.upsert($scope.user, function () {
        toasty.pop.success({
          title: gettextCatalog.getString('Profile saved'),
          msg: gettextCatalog.getString('Enjoy the new you!'),
          sound: false
        });
      }, function (err) {
        toasty.pop.error({
          title: gettextCatalog.getString('Error deleting note'),
          msg: gettextCatalog.getString('Your note is not deleted: ') + err,
          sound: false
        });
      });
    };

    $scope.loading = true;
    $scope.users = User.find({
      filter: {
        include: ['roles']
      }
    }, function () {
      $scope.loading = false;
    });
  });
