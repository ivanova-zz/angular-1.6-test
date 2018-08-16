'use strict';

module.exports = [
    '$locationProvider' ,'$routeProvider',
    function($locationProvider, $routeProvider) {
        $routeProvider.
        when('/products', {
            template: '<products></products>'
        })
    }
];
