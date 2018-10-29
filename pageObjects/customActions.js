/**
 * @author Gonzalo Cervantes
 * @description Library created in order to use custom hotwire actions that can be edited in order to avoid code duplication.
 */
(function () {
    'use strict';
    const timeout = 35000;
    const EC = require('protractor').ExpectedConditions;
    const ElementFinder = require('protractor').ElementFinder;
    const ElementArrayFinder = require('protractor').ElementArrayFinder;


    /**
     * @description Howtire custom click, wait for element to be enable and visible in order to perform the action
     * @return Click Action.
     */
    ElementFinder.prototype.clicks = function () {
        browser.wait(EC.elementToBeClickable(this), timeout);
        return this.click();
    };

    /**
     * @description Howtire custom clear, wait for element to be visible in order to perform the action.
     * @return Clear Action.
     */
    ElementFinder.prototype.clears = function () {
        browser.wait(EC.visibilityOf(this), timeout);
        return this.clear();
    };

    /**
     * @description Howtire custom hover, wait for element to be visible in order to perform a mouse move to element.
     * @return mouseMove action.
     */
    ElementFinder.prototype.hoverElement = function () {
        browser.wait(EC.visibilityOf(this), timeout);
        return browser.actions().mouseMove(this).perform();
    };

    /**
     * @description Howtire custom SendKeys, wait for element to be visible in order to perform the action.
     * @return sendKeys action
     */
    ElementFinder.prototype.enterText = function (text) {
        browser.wait(EC.elementToBeClickable(this),timeout);
        browser.wait(EC.visibilityOf(this), timeout);
        this.clear();
        return this.sendKeys(text);
    };

    /**
     * @description Howtire custom Hit Key, wait for element to be visible in order to Hit with a Key such as ESCAPE, TAB, ENTER, etc....
     * @param {String} key
     * @return sendKeys action.
     */
    ElementFinder.prototype.hitKey = function (key) {
        browser.wait(EC.visibilityOf(this), timeout);
        return this.sendKeys(key);
    };

    /**
     * @description Howtire custom isDisplayed, wait for element to be visible in order to perform the action.
     * @return {webdriver.promise.Promise.<boolean>|*}
     */
    ElementFinder.prototype.isElementDisplayed = function (setTimeOut) {
        const _timeout = (setTimeOut === undefined) ? timeout : setTimeOut;
        browser.wait(EC.visibilityOf(this), _timeout);
        return this.isDisplayed();
    };

    /**
     * @description Howtire custom getCssValue, wait for element to be visible in order to perform the action.
     * @param value
     * @return {webdriver.promise.Promise.<string>}
     */
    ElementFinder.prototype.getCSSValue = function (value) {
        browser.wait(EC.visibilityOf(this), timeout);
        return this.getCssValue(value);
    };


    /**
     * @description Howtire custom function to wait for element to be present then scroll into view.
     * @return {*}
     */
    ElementFinder.prototype.scrollToView = function () {
        browser.wait(EC.presenceOf(this), timeout);
        return browser.executeScript('arguments[0].scrollIntoView()', this.getWebElement());
    };

    /**
     * @description Howtire custom isPresent, wait for element to be present in order to perform the action.
     * @return {ElementFinder}
     */
    ElementFinder.prototype.IsElementPresent = function (setTimeOut) {
        const _timeout = (setTimeOut === undefined) ? timeout : setTimeOut;
        browser.wait(EC.presenceOf(this), _timeout);
        return this.isPresent();
    };

    /**
     * @description Hotwire custom HasClass, wait for element to be present then get 'Class' attribute.
     * @return {string|webdriver.promise.Promise.<string>}
     */
    ElementFinder.prototype.getClassName = function () {
        browser.wait(EC.presenceOf(this), timeout);
        return this.getAttribute('class');
    };

    /**
     * @description Hotwire custom getAttribute, wait dor element to be present and perform the action.
     * @param attribute
     * @return {string|webdriver.promise.Promise.<string>}
     */
    ElementFinder.prototype.getAttributeValue = function (attribute) {
        browser.wait(EC.presenceOf(this), timeout);
        return this.getAttribute(attribute);
    };

    /**
     * @description Hotwire custom action, wait for element to be invisible.
     * @return {webdriver.promise.Promise.<T>|*}
     */
    ElementFinder.prototype.waitToDissapear = function () {
        return browser.wait(EC.invisibilityOf(this), 5000);
    };

    /**
     * @description Hotwire custom action, wait for element to be visible.
     * @return {webdriver.promise.Promise.<T>|*}
     */
    ElementFinder.prototype.waitForVisibility = function () {
        return browser.wait(EC.visibilityOf(this), timeout);
    };

    /**
     * @description Hotwire custom action, wait for element to be present.
     * @return {webdriver.promise.Promise.<T>|*}
     */
    ElementFinder.prototype.waitForPresence = function () {
        return browser.wait(EC.presenceOf(this), timeout);
    };
    /**
     * @description Hotwire custom getValue, wait for element to be visible then getAttribute('value')
     * @return {string|webdriver.promise.Promise.<string>}
     */
    ElementFinder.prototype.getValueFromElement = function () {
        browser.wait(EC.visibilityOf(this), timeout);
        return this.getAttribute('value');
    };

    /**
     * @description Hotwire custom getText(), wait for element to be visible then perform the action.
     */
    ElementFinder.prototype.getElementText = function () {
        browser.wait(EC.visibilityOf(this), timeout);
        return this.getText();
    };

    /**
     * @description Hotwire custom function to get count of a list of elements.
     * @return {*}
     */
    ElementArrayFinder.prototype.getCountFromList = function () { // jshint ignore:line
        return this.count(); // jshint ignore:line
    }
})();