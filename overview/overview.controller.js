SmartHomeManger

    .controller('overviewController', ['$route', function() {

        var overviewController = this;

        overviewController.onOffButtonText = "Off";

        overviewController.ethernetActive = true;
        overviewController.configureWlanEnabled = false;
        overviewController.configureEthernetEnabled = false;

        overviewController.showConfigureWlan = function() {
            overviewController.configureWlanEnabled = !overviewController.configureWlanEnabled
        };

        overviewController.showConfigureEthernet = function() {
            overviewController.configureEthernetEnabled = !overviewController.configureEthernetEnabled
        };

        overviewController.activateEthernet = function() {
            overviewController.ethernetActive = !overviewController.ethernetActive;
            if (overviewController.ethernetActive) {
                overviewController.onOffButtonText = "Off"
            } else {
                overviewController.onOffButtonText = "On"
            }
        };

    }])