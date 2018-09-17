SmartHomeManger

    .component('sidebar', {
        templateUrl: 'sidebar/sidebar.html',
        controllerAs: 'sidebarController',
        controller: function($scope, $element, $attrs) {
            var sidebarController = this;
            console.log('sidebarController');
        }
    })