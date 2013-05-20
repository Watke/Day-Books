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

        self.showAccountSheet = function () {
            // private member
            var accountSheet = new EJS({url : '/templates/accountSheet.ejs'}).render();
            // account sheet
            $('#accountSheetWrap').append(accountSheet);
            return self;
        };

        self.updateFooterByParentId = function (id) {
            var numberOfItem,
                itemOrItems,
                footer;
            // how many items
            numberOfItem = $('#' + id + ' table tbody').children().length;
            itemOrItems = numberOfItem > 1 ? 'items' : 'item';
            // account sheet's footer
            footer = new EJS({url : '/templates/popUpFooter.ejs'}).render(
                {number : numberOfItem, itemOrItems : itemOrItems}
            );
            $('#' + id).children('footer').append(footer);
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

        self.closeDayBook = function () {
            $('#newEntryWrap').children().remove();
            return self;
        };

    }
    return CatwalksDOM;
});