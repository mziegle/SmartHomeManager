SmartHomeManger

    .component('sidebar', {
        templateUrl: 'sidebar/sidebar.html',
        controllerAs: 'sidebarController',
        controller: function($location) {

            var sidebarController = this;

            sidebarController.currentlyLoaded = $location.path();

            sidebarController.loadOverviewView = function() {
                $location.path("/overview");
            };

            sidebarController.loadDevicesView = function() {
                $location.path("/devices");
            };
        }
    })