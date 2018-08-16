'use strict';

module.exports = [
    '$locationProvider' ,'$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('');
        $routeProvider.
        when('/', {
            template: '<products></products>'
        }).
        when('/cart', {
          template: '<cart></cart>'
        });
    }
];
