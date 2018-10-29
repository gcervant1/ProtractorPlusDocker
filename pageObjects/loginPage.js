require('./customActions.js');

var LoginPage = function () {
    this.emailBox = element(by.css("#identifierId"));
    this.forgotEmailLink = element(by.css(".ck6P8 button[jsname='Cuz2Ue']"));
    this.learnMoreLink = element(by.css("a[jsname='JFyozc']"));
    this.createAccountLink = element(by.css("span.RveJvd.snByac"));
    this.errorMessageLabel = element(by.css("div[jsname='B34EJ']"));
    this.nextButton = element(by.css('#identifierNext'));
    this.userIdentifier = element(by.css("#profileIdentifier"));
    this.passwordBox = element(by.css("#password input[type='password']"));
    this.passwordNextButton = element(by.css("#passwordNext"));

    /**
     * @author gcervant1
     * @param {String} user
     * @param {String} password
     * @param {Boolean} validEmail
     */
    this.enterCredentials = (user, password, validEmail) => {
        // enter username
        this.emailBox.enterText(user);
        this.nextButton.clicks();
        // enter password if username was not null
        if (validEmail) {
            this.passwordNextButton.clicks();
            this.passwordBox.enterText(password);
            this.passwordNextButton.clicks();
        }
    };

    /**
     * @author 
     * @param expectedMessage
     * @returns {Boolean}
     * @summary Method will return true or false if the condition meets the needs.
     */
    this.isMessageDisplayed = expectedMessage => {
       return this.errorMessageLabel.getElementText().then(text =>{
             return (text == expectedMessage);
         })
    };
}
module.exports = new LoginPage();