/**
 * Author: Ken
 * Date: 18/05/2013
 * Time: 15:51
 */
/*global define, EJS*/
define(['jquery',
    '../javascripts/constant.js'], function ($, CONSTANT) {
    "use strict";
    function CatwalksDOM() {
        // private members
        var self = this; // NOTE: Capital constructor enable `validthis`

        self.addNewEntry = function () {
            // private member
            var newEntry = new EJS({url : '/templates/newEntry.ejs'}).render();
            $('#newEntryWrap').append(newEntry);
            return self;
        };

        self.hideElementById = function (id) {
            var element = document.getElementById(id);
            element.setAttribute('style', 'display:none;');
            return self;
        };

        self.showElementById = function (id) {
            var element = document.getElementById(id);
            element.setAttribute('style', 'display:block;');
            return self;
        };
    }
    return CatwalksDOM;
});