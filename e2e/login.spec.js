describe('login', function() {

    beforeAll(function() {
        browser.get("http://localhost:8080");
    });

    it('should login to the application', function() {

        // Arrange
        element(by.id('user')).clear().sendKeys('test');
        element(by.id('password')).clear().sendKeys('test');

        // Act
        element(by.id('login')).click();

        // Assert
        browser.getCurrentUrl().then(function(currentUrl){
            expect(currentUrl.indexOf('overview')).toBeGreaterThan(-1);
        });
    });

});