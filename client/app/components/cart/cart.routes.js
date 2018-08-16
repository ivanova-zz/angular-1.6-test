'use strict';

module.exports = [
    '$locationProvider' ,'$routeProvider',
    function($locationProvider, $routeProvider) {
        $routeProvider.
        when('/cart', {
            template: '<cart></cart>'
        })
    }
];
