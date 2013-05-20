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
        aSerialMaker.setPrefix('A');
        aSerialMaker.setSequence(1000);

        // public members
        self.getInput = function (key) {
            var i,
                newEntry = {},
                productForm = $('#productForm'),
                ingredients = $('.ingredients').children('input');
            newEntry.brand = productForm.children('.entry').children('[name="brand"]').val() || CONSTANT.NEW_ENTRY.DEFAULT.BRAND;
            newEntry.productName =  productForm.children('.entry').children('[name="productName"]').val() ||
                CONSTANT.NEW_ENTRY.DEFAULT.PRODUCT_NAME;

            newEntry.ingredients = [];
            for (i = 0; i < ingredients.length; i += 1) {
                newEntry.ingredients.push($(ingredients[i]).val() ||
                    CONSTANT.NEW_ENTRY.DEFAULT.INGREDIENT);
            }
            if (key) {
                newEntry.key = key;
            } else {
                newEntry.key = aSerialMaker.generateSerialNumber();
            }
            return {
                newEntry : newEntry,
                saveEntry : self.saveEntry
            };
        };

        self.saveEntry = function (event) {
            event.preventDefault();
            var i,
                aDataStorage = new DataStorage(),
                aSessionStorage = new aDataStorage.SessionStorage();
            aSessionStorage.init().saveData(self.getInput().newEntry);
            if (arguments.length > 1) {
                for (i = 1; i < arguments.length; i += 1) {
                    if (arguments[i] && typeof arguments[i] === 'function') {
                        arguments[i]();
                    }
                }
            }
            return false;
        };
    }
    return NewEntry;
});