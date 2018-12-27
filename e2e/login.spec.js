describe('login', function() {

    beforeAll(function() {
        browser.get("http://localhost:8080");
    });

    it('should login to the application', function() {
        element(by.id('user')).clear().sendKeys('test');
        element(by.id('password')).clear().sendKeys('test');
        element(by.id('login')).click();

        browser.getCurrentUrl().then(function(currentUrl){
            expect(currentUrl.indexOf('overview')).toBeGreaterThan(-1);
        });
    });

});