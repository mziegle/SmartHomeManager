SmartHomeManger

    .component('wlan', {
        templateUrl: 'overview/wlan/wlan.html',
        controllerAs: 'wlanController',
        controller: function($timeout) {

            var wlanController = this;
            
            wlanController.statusText = "WLAN must be configured";
            wlanController.onOffButtonText = "On";

            wlanController.active = false;
            wlanController.configApplyInProgress = false;
            wlanController.configurationDisplayed = false;

            wlanController.ssid = "";
            wlanController.password = "";

            console.log("wlanController");
            wlanController.showConfiguration = function() {
                console.log("show config");
                wlanController.configurationDisplayed = !wlanController.configurationDisplayed;
            };

            wlanController.activate = function() {
                wlanController.active = !wlanController.active;
                if (wlanController.active) {
                    wlanController.onOffButtonText = "Off"
                } else {
                    wlanController.onOffButtonText = "On"
                }
            };

            wlanController.save = function() {
                wlanController.configApplyInProgress = true;
                $timeout(function() {
                    wlanController.configApplyInProgress = false;
                }, 1000);
                // console.log("save clicked")
            };
        }
    })