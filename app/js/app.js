// 'use strict';

angular.module("TodoApp", ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/main.html',
            controller:  'MainCtrl'
        });
        $routeProvider.when('/next', {
            templateUrl: 'views/next.html',
            controller:  'NextCtrl'
        });
        $routeProvider.otherwise({redirectTo: '/'});
    }]);