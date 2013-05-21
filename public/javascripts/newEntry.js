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

        self.getInputData = function () {
            // prevent hoisting confusion
            var data = {};
            function formattingDate(oldDate) {
                if (oldDate) {
                    //private variables
                    var newDate = new Date(oldDate),
                        day = newDate.getDate(),
                        month = newDate.getMonth(),
                        year = newDate.getFullYear().toString().slice(2);
                    return day + '.' + month + '.' + year;
                }
                // for 'use strict' reason, no `else` after `return`
                if (!oldDate) {
                    return '';
                }
                return '';
            }
            data.type = $('#type').val();
            data.ENTRY = $('#entry').val();
            data.DATE = formattingDate($('#entryDate').val());

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