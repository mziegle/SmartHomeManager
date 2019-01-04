SmartHomeManger

    .controller('signInController', function($scope, $location, signInService) {

        var signInController = this;

        signInController.loginInProgress = false;

        signInController.signIn = function() {

            signInController.loginInProgress = true;

            signInService.checkCredentials(
                'Bob',
                'secret',
                (success) => {
                    if (success) {
                        signInController.loginInProgress = false;
                        $location.path("/overview");
                        $scope.$apply();
                    } else {
                        throw 'Login failed';
                    }
                });
        };

    })