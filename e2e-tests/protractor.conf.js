dirname = __dirname.replace(/\\/g, '/');

exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        'home/test.js'
    ],

    directConnect: true,

    baseUrl: 'file://' + dirname + '/../app/',

    onPrepare: function() {
        browser.resetUrl = 'file://' + dirname + '/reset.html';
    },

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'binary': './node_modules/electron-prebuilt/dist/electron' + (process.platform == 'win32' ? '.exe' : ''),
            'args': ['app=.']
        }
    },

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    plugins: [{
        package: 'protractor-console',
        logLevels: ['severe', 'warning']
    }]
};
