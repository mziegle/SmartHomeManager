exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['e2e/login.spec.js'],

    capabilities: {
        'browserName': 'chrome'
    },

    SELENIUM_PROMISE_MANAGER: false
};