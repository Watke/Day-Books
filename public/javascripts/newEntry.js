/**
 * Author: Ken
 * Date: 16/05/2013
 * Time: 23:16
 */
/*global define*/
define(["jquery",
    "../javascripts/constant.js",
    '../javascripts/dataStorage.js'], function ($, CONSTANT, DataStorage) {
    "use strict";
    function NewEntry() {
        // private members
        var self = this,
        // this is not a good implementation, but here just for simple
            aDataStorage = new DataStorage(),
            aSerialMaker = aDataStorage.SerialMaker();

        // generate serial number, this is not a good part
        aSerialMaker.setSequence(1000);
        /**
         * get user input data from add-new-entry form
         * @returns {{data: {Object}, saveData: Function}}
         */
        self.getInputData = function () {
            // prevent hoisting confusion
            var data = {};
            function basicSanitise(input) {
                return input.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
            }
            data.type = basicSanitise($('#type').val());
            data.ENTRY = basicSanitise($('#entry').val());
            data.DATE = basicSanitise($('#entryDate').val());

            data.ACCOUNT = basicSanitise($('#accountNo').val());
            data.CONTRA_ACCOUNT = basicSanitise($('#contraAccount').val());
            data.accountName = basicSanitise($('#accountName').val());
            data.contraAccountName = basicSanitise($('#contraAccountName').val());

            data.cardType = basicSanitise($('#cardType').val());
            data.AMOUNT = basicSanitise($('#amount').val());
            data.TEXT = basicSanitise($('#text').val());
            data.CURRENCY = basicSanitise($('#currency').val());
            // add other data which is not from the form
            data.INVOICE = '';
            data.VAT_1 = '';
            data.VAT_2 = '';
            //set up key
            if (data.ENTRY && data.ENTRY.length > 0) {
                data.key = data.ENTRY;
            } else {
                data.key = aSerialMaker.generateSerialNumber();
                data.ENTRY = data.key;
            }
            return {
                data : data,
                saveData : self.saveData
            };
        };
        /**
         * save data into session storage
         * @param event DOM event
         * @returns {boolean} return false, prevent DOM default action
         */
        self.saveData = function (event) {
            var i,
                aSessionStorage = new aDataStorage.SessionStorage();
            event.preventDefault();
            // if support session storage
            aSessionStorage.init().saveData(this.data);
            if (arguments.length > 1) {
                for (i = 1; i < arguments.length; i += 1) {
                    if (arguments[i] && typeof arguments[i] === 'function') {
                        arguments[i](this.data);
                    }
                }
            }
            return false;
        };

    }
    return NewEntry;
});