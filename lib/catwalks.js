/**
 * Author: Ken
 * Date: 15/05/2013
 * Time: 22:38
 */

// loading libraries
var CONSTANT = require('../lib/constant');

// inherent from Object.prototype
var catwalks = {};

catwalks.getToday = function () {
    //private variables
    var today = new Date();

    var weekday = CONSTANT.TODAY.WEEKDAYS[today.getDay()];
    var date = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();

    return year + '-' + month + '-' + date;
}

catwalks.getWeekday = function(){
    //private variables
    var today = new Date();

    var weekday = CONSTANT.TODAY.WEEKDAYS[today.getDay()];

    return weekday;
}

module.exports = catwalks;