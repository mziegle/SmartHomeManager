SmartHomeManger

    .component('ethernet', {
        templateUrl: 'overview/ethernet/ethernet.html',
        controllerAs: 'ethernetController',
        controller: function($scope, $element, $attrs) {

            var ethernetController = this;

            console.log("ethernetController");

            ethernetController.active = true;
            ethernetController.onOffButtonText = "Off";
            ethernetController.configurationDisplayed = false;

            ethernetController.showConfiguration = function() {
                ethernetController.configurationDisplayed = !ethernetController.configurationDisplayed;
            };

            ethernetController.activate = function() {
                ethernetController.active = !ethernetController.active;
                if (ethernet.active) {
                    ethernetController.onOffButtonText = "Off"
                } else {
                    ethernetController.onOffButtonText = "On"
                }
            };
        }
    })