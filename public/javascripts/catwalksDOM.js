/**
 * Author: Ken
 * Date: 18/05/2013
 * Time: 15:51
 */
/*global define, EJS*/
define(['jquery',
    '../javascripts/constant.js',
    '../javascripts/selectBox.js',
    '../javascripts/currencyList.js'], function ($, CONSTANT, SelectBox, CurrencyList) {
    "use strict";
    function CatwalksDOM() {
        // private members
        var self = this; // NOTE: Capital constructor enable `validthis`
        /**
         * initialise select box function
         * @returns {this} the object that invoked the function
         */
        self.initSelectBox = function () {
            var aSelectBox = new SelectBox();
            aSelectBox.init();
            return self;
        };
        /**
         * initialise currencies list
         * @returns {this} the object that invoked the function
         */
        self.initCurrencyList = function () {
            // private member
            var aCurrencyList = new CurrencyList();
            aCurrencyList.init();
            return self;
        };
        /**
         * create the Day Book form for adding new entry
         * @returns {this} the object that invoked the function
         */
        self.addNewEntry = function () {
            // private member
            var newEntry = new EJS({url : '/templates/newEntry.ejs'}).render();
            $('#newEntryWrap').append(newEntry);
            return self;
        };
        /**
         * show the account sheet that allows a user to choose
         * @returns {this} the object that invoked the function
         */
        self.showAccountSheet = function (element) {
            // private member
            var accountSheet = new EJS({url : '/templates/accountSheet.ejs'}).render(
                    {
                        destination : $(element.parentNode).find('label').attr('for') === 'accountNo' ?
                                'accountNo' : 'contraAccount'
                    }
                ),
                normalAccount = $(element.parentNode).find('#accountNo'),
                contraAccount = $(element.parentNode).find('#contraAccount');
            // account sheet
            $('#accountSheetWrap').append(accountSheet);

            return self;
        };
        /**
         * update footer elements under tables
         * @param id
         * @returns {this} the object that invoked the function
         */
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
        /**
         * prevent the add-new-entry form submitted
         * by pressing `enter` key
         * @param event
         * @returns {boolean}
         */
        self.preventFormDefault = function (event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                return false;
            }
        };
        self.selectAccount = function (event, row) {
            event.preventDefault();
            var normalAccountNo = $('#accountNo'),
                contraAccountNo = $('#contraAccount'),
                accountName = $('#accountName'),
                contraAccountName = $('#contraAccountName'),
                rowItems = $(row).children(),
            // compare with `label` tag `for` attribute in middleContainer
                dataTag = $('#accountSheet').attr('data-tag');
            if (normalAccountNo && dataTag === 'accountNo') {
                // set up account no. and name in the add-new-entry form
                normalAccountNo.val(rowItems.first().html());
                accountName.val(rowItems.first().next().html());
            } else {
                // set up contra account no. and name in the add-new-entry form
                contraAccountNo.val(rowItems.first().html());
                contraAccountName.val(rowItems.first().next().html());
            }
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

        self.removeElementById = function (id) {
            var element = document.getElementById(id),
                parentNode = element.parentNode,
                oldChild;
            //  holds a reference to the removed child node. oldChild === child
            oldChild = parentNode.removeChild(element);
            return self;
        };

        self.closeDayBook = function () {
            $('#newEntryWrap').children().remove();
            return self;
        };

    }
    return CatwalksDOM;
});