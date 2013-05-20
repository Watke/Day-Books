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

        self.showCurrentEntry = function (entry) {
            var entryRow = new EJS({url : "/templates/entryRowWrap.ejs"}).render(entry);
            $('#entryRowWrap').append(entryRow);
            return self;
        };
    }
    return CurrentEntry;
});