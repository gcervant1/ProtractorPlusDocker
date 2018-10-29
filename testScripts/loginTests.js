var LoginPage = require('../pageObjects/loginPage.js');
var USING = require('jasmine-data-provider');
var LOGIN_DATA = require('./loginData');

beforeEach(() => {
    browser.get(browser.baseUrl);
})
describe("Login into gmail ", () => {
    
    USING(LOGIN_DATA, data => {
        it(`When login with user: "${data.user}" and password: "${data.password}", then message: "${data.expected}" is displayed`, () => {
            LoginPage.enterCredentials(data.user, data.password, data.validEmail);

            expect(LoginPage.isMessageDisplayed(data.expected)).toBe(true);

            if(data.validEmail) {
                expect(LoginPage.userIdentifier.isElementDisplayed()).toBe(true);
            }
            else{
                expect(LoginPage.forgotEmailLink.isElementDisplayed()).toBe(true);
                expect(LoginPage.learnMoreLink.isElementDisplayed()).toBe(true);
                expect(LoginPage.createAccountLink.isElementDisplayed()).toBe(true);
            }
        })
    })
})