'use strict';

/**
 * @ngdoc overview
 * @name aasiaTravel2App
 * @description
 * # aasiaTravel2App
 *
 * Main module of the application.
 */
angular
  .module('mina3App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/bio', {
        templateUrl: 'views/bio.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'MainCtrl'
      })
       .when('/photos', {
        templateUrl: 'views/photos.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
