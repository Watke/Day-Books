
/*
 * GET home page.
 */
var catwalks = require('../lib/catwalks')
    , CONSTANT = require('../lib/constant');

exports.index = function(req, res){
    var today = catwalks.getToday() || CONSTANT.DATE.DEFAULT;
    var weekday = catwalks.getWeekday() || CONSTANT.DATE.DEFAULT;
    res.render('index', { title: 'Day Books', today : today, weekday : weekday });
};

