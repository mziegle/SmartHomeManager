SmartHomeManger

    .controller('signInController', function($location) {
            
        var signInController = this;

        signInController.signIn = function() {
            $location.path( "/overview" );
        };

    })