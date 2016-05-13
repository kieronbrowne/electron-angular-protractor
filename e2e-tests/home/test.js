'use strict';

describe('Opening the app', function() {

    it('should show the home page', function() {
        browser.get('index.html?test=protractor');
        expect($('h1').getText()).toMatch("Hello, world");
    });

});