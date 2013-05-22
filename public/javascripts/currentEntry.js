/**
 * Author: Ken
 * Date: 20/05/2013
 * Time: 11:39
 */
/*global define, EJS*/
define(["jquery",
    "../javascripts/constant.js",
    '../javascripts/dataStorage.js'], function ($, CONSTANT, DataStorage) {
    "use strict";
    function CurrentEntry() {
        // private members
        var self = this;

        // public members
        self.init = function () {
            var currentEntryTable = new EJS({url : "/templates/currentEntry.ejs"}).render();
            $('#currentEntryWrap').append(currentEntryTable);
            return self;
        };
        /**
         * show existing data, or called entry
         * in the example, data is stored in session storage
         * @param entry {Object} the data to be show
         * @returns {this} the object that invoked the function
         */
        self.showCurrentEntry = function (entry) {
            var entryRow = new EJS({url : "/templates/entryRowWrap.ejs"}).render(entry);
            $('#entryRowWrap').append(entryRow);
            return self;
        };
        /**
         * get entry by key from session storage
         * @param key {String}
         * @param successCB called when successfully get the entry
         * @param errorCB called when invocation failed
         */
        self.getEntryByKey = function (key, successCB, errorCB) {
            var entry = {},
                aDataStorage = new DataStorage(),
                aSessionStorage = new aDataStorage.SessionStorage();
            // Even thought, this is synchronous function, for simplicity
            aSessionStorage.readData(key, successCB, errorCB);
        };
    }
    return CurrentEntry;
});