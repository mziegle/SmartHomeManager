var SmartHomeManger = angular.module('SmartHomeManager', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {

        $routeProvider
            .when('/login', {
                templateUrl: 'sign_in/signin.html',
                controller: 'signInController',
                controllerAs: 'signInController'
            })
            .when('/overview', {
                templateUrl: 'overview/overview.html',
                controller: 'overviewController',
                controllerAs: 'overviewController'
            })
            .when('/devices', {
                templateUrl: 'devices.html',
                controller: 'devicesController',
                controllerAs: 'devicesController'
            })
            .otherwise('/login');
    }])

    .controller('devicesController', ['$route', function() {
        console.log('devicesController loaded')
    }])

