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
        var self = this;

        self.getInputData = function () {
            var data = {};
            data.type = $('#type').val();
            data.entry = $('#entry').val();
            return {
                data : data,
                saveData : self.saveData
            };
        };

        self.saveData = function (event) {
            var i;
            event.preventDefault();
            // this.data to get date
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