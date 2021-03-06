/**
 * Author: Ken
 * Date: 15/05/2013
 * Time: 22:38
 */

// loading libraries
var CONSTANT = require('../lib/constant');

// inherent from Object.prototype
var catwalks = {};
/**
 * get today in the format of yyyy-m-dd
 * @returns {string}
 */
catwalks.getToday = function () {
    "use strict";
    //private variables
    var today = new Date(),
        day = today.getDate(),
        month = today.getMonth() + 1,
        year = today.getFullYear();

    return year + '-' + month + '-' + day;
};
/**
 * get weekday in the format of English word
 * @returns {String}
 */
catwalks.getWeekday = function () {
    "use strict";
    //private variables
    var today = new Date();

    return CONSTANT.TODAY.WEEKDAYS[today.getDay()];
};

module.exports = catwalks;