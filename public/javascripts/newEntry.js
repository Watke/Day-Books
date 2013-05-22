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
            data.type = $('#type').val();
            data.ENTRY = $('#entry').val();
            data.DATE = $('#entryDate').val();

            data.ACCOUNT = $('#accountNo').val();
            data.CONTRA_ACCOUNT = $('#contraAccount').val();
            data.accountName = $('#accountName').val();
            data.contraAccountName = $('#contraAccountName').val();

            data.cardType = $('#cardType').val();
            data.AMOUNT = $('#amount').val();
            data.TEXT = $('#text').val();
            data.CURRENCY = $('#currency').val();
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