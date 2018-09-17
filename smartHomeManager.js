var SmartHomeManger = angular.module('SmartHomeManager', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {

        $routeProvider
            .when('/login', {
                templateUrl: 'signin.html',
                controller: 'loginController',
                controllerAs: 'loginController'
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

    .controller('loginController', ['$location', function($location) {
        
        var loginController = this;

        loginController.login = function() {
            $location.path( "/overview" );
        };

    }])

    .controller('devicesController', ['$route', function() {
        console.log('devicesController loaded')
    }])

