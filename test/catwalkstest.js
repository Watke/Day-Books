/**
 * Author: Ken
 * Date: 20/05/2013
 * Time: 22:50
 */
/*global suite, test*/
var assert = require('assert'),
    CONSTANT = require('../lib/constant'),
    catwalks = require('../lib/catwalks'),
    expect = require('chai').expect;

function ok(exp, msg) {
    "use strict";
    if (!exp) {
        throw new Error(msg);
    }
}
// RUN the test: mocha ./test/ -R spec -u qunit -t 6000
suite('catwalks');
test('getToday', function () {
    "use strict";
    var today = catwalks.getToday();
    expect(today).to.match(CONSTANT.DATE.TODAY.REG_EXP);
});

test('getWeekday', function () {
    "use strict";
    var weekday = catwalks.getWeekday();
    expect(weekday).to.match(CONSTANT.DATE.WEEKDAY.REG_EXP);
});