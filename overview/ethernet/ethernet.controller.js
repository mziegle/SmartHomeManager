SmartHomeManger

    .component('ethernet', {
        templateUrl: 'overview/ethernet/ethernet.html',
        controllerAs: 'ethernetController',
        controller: function($timeout) {

            var ethernetController = this;
            
            ethernetController.statusText = "Ethernet must be configured";
            ethernetController.onOffButtonText = "On";

            ethernetController.active = false;
            ethernetController.configApplyInProgress = false;
            ethernetController.configurationDisplayed = false;

            ethernetController.ip = "";
            ethernetController.subnet = "";
            ethernetController.gateway = "";

            console.log("ethernetController");
            ethernetController.showConfiguration = function() {
                ethernetController.configurationDisplayed = !ethernetController.configurationDisplayed;
            };

            ethernetController.activate = function() {
                ethernetController.active = !ethernetController.active;
                if (ethernetController.active) {
                    ethernetController.onOffButtonText = "Off"
                } else {
                    ethernetController.onOffButtonText = "On"
                }
            };

            ethernetController.save = function() {
                ethernetController.configApplyInProgress = true;
                $timeout(function() {
                    ethernetController.configApplyInProgress = false;
                }, 1000);
            };
        }
    })