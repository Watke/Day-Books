/**
 * Author: Ken
 * Date: 15/05/2013
 * Time: 22:43
 */

exports.TODAY = {
    DEFAULT : '',
    REG_EXP : /\d{4}-\d{1,2}-\d{1,2},\s{1}\w{1,9}/gmi,
    WEEKDAYS : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};

exports.DATE = {
    DEFAULT : '',
    TODAY : {
        REG_EXP : /\d{4}-\d{1,2}-\d{1,2}/gmi
    },
    WEEKDAY : {
        REG_EXP : /\w{1,9}/gmi,
        DAY : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    }
};
