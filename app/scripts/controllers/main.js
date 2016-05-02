'use strict';


angular.module('mina3App')
  .controller('MainCtrl', function ($scope) {

    $scope.categories = [
      {'id': 0, 'name': 'Home', 'url': '#/home'},
      {'id': 1, 'name': 'Bio', 'url': '#/bio'},
      {'id': 2, 'name': 'Photos', 'url': '#/photos'},
      {'id': 3, 'name': 'Contact', 'url': '#/contact'}
    ];

// <span class="glyphicon glyphicon-home" aria-hidden="true"></span>

    $scope.currentCategory = null;

    function setCurrentCategory(category) {
      $scope.currentCategory = category;
    }

    $scope.setCurrentCategory =setCurrentCategory;

    // function isCurrentCategory(category) {
    //   return @scope.currentCategory !== null && category.name === $scope.currentCategory.name;
    // }

    // $scope.isCurrentCategory = isCurrentCategory;

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
