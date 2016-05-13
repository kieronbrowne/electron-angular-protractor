'use strict';

console.warn('__dirname: ' + __dirname);

const _ = nodeRequire('lodash');
const msg = 'hello, world!';

let app = angular.module('app', []);

app.component('main', {
    template: `<h1>${_.capitalize(msg)}</h1>`
});