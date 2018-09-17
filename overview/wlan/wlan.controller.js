SmartHomeManger

    .component('wlan', {
        templateUrl: 'overview/wlan/wlan.html',
        controllerAs: 'wlanController',
        controller: function($scope, $element, $attrs) {

            var wlanController = this;
            
            wlanController.active = true;
            wlanController.onOffButtonText = "Off";
            wlanController.configurationDisplayed = false;

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
        }
    })