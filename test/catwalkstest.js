/**
 * Author: Ken
 * Date: 15/05/2013
 * Time: 22:50
 */

var assert = require('assert')
    , CONSTANT = require('../lib/constant')
    , catwalks = require('../lib/catwalks')
    , expect = require('chai').expect
    ;

function ok(exp, msg){
    if (!exp) {
        throw new Error(msg);
    }
}

suite('catwalks');
test('getToday', function(){
    var today = catwalks.getToday();
    expect(today).to.match(CONSTANT.DATE.TODAY.REG_EXP);
});

test('getWeekday', function(){
    var weekday = catwalks.getWeekday();
    expect(weekday).to.match(CONSTANT.DATE.WEEKDAY.REG_EXP);
});