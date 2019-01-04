SmartHomeManger
    .service('signInService', function() {

        this.checkCredentials = function(user, password, callback) {
            setTimeout(_ => callback(true), 1000);
        };

    });