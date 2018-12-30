var loginPage = require('./pages/LoginPage');

describe('login', function() {

    beforeAll(async function() {
        await loginPage.get();
    });

    it('should login to the application', async function() {

        // Arrange
        await loginPage.setUser('Bob');
        await loginPage.setPassword('secret');

        // Act
        await loginPage.login();

        // Assert
        var currentUrl = await browser.getCurrentUrl();

        expect(currentUrl.indexOf('overview')).toBeGreaterThan(-1);
    });

});