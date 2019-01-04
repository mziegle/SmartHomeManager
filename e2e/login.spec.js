var loginPage = require('./pages/LoginPage');
var EC = protractor.ExpectedConditions;

describe('login', function() {

    beforeAll(async function() {
        await loginPage.get();
    });

    it('should login to the application', async function() {

        var loadingIconNotShowing = EC.not(EC.presenceOf(loginPage.loadingIcon()));

        // Arrange
        await loginPage.setUser('Bob');
        await loginPage.setPassword('secret');

        // Act
        await loginPage.login();

        // wait for loading icon to be removed from the DOM
        await browser.wait(loadingIconNotShowing, 5000);

        // Assert
        var currentUrl = await browser.getCurrentUrl();

        expect(currentUrl.indexOf('overview')).toBeGreaterThan(-1);
    });

});