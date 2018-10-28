SmartHomeManger

    .component('heater', {
        templateUrl: 'overview/heater/heater.html',
        controllerAs: 'heaterController',
        controller: function ($scope, $element, $attrs) {
            var heaterController = this;
            console.log('heaterController');
        }
    })