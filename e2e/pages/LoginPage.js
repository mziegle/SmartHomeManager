var LoginPage = function() {

    this.get = function() {
        return browser.get("http://localhost:8080");
    }

    this.setUser = function(user) {
        return element(by.id('user')).clear().sendKeys(user);
    }

    this.setPassword = function(password) {
        return element(by.id('password')).clear().sendKeys(password);
    }

    this.login = function() {
        return element(by.id('login')).click();
    }
}

module.exports = new LoginPage();