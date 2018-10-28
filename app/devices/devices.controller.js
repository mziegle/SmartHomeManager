SmartHomeManger

    .controller('devicesController', ['$route', function() {

        var devicesController = this;

        devicesController.devices = [
            {
                id: 0,
                name: "Camera Backyard",
                ip: "10.10.10.1",
                status: "off"
            },
            {
                id: 1,
                name: "Heater",
                ip: "10.10.10.2",
                status: "off"
            }
        ];

        console.log(devicesController.devices);
    }]);
    