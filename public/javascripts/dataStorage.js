/**
 * Author: Ken
 * Date: 17/05/2013
 * Time: 12:42
 */
/*global define*/
define(["jquery", "../javascripts/constant.js"], function ($, CONSTANT) {
    "use strict";
    function DataStorage() {
        // private members
        var self = this;
        /**
         * Produce an object that produces unique strings. A
         * unique string is made up of two parts: a prefix
         * and a sequence number. The object comes with
         * methods for setting the prefix and sequence
         * number, and a generateSerialNumber method that produces unique
         * strings.
         * NOTE: Outer members do not have knowledge about the sequence.
         * @returns {{setPrefix: Function, setSequence: Function, generateSerialNumber: Function}}
         */
        self.SerialMaker = function () {
            // private secrete
            var prefix = '',
                sequence = 0;
            return {
                setPrefix: function (prefix) {
                    prefix = String(prefix);
                },
                setSequence: function (seq) {
                    if (typeof seq !== 'number') {
                        throw CONSTANT.ERROR.DB.SEQUENCE;
                    }
                    sequence = seq;
                },
                generateSerialNumber: function () {
                    var result = prefix + sequence;
                    sequence += 1;
                    return result;
                }
            };
        };

        self.SessionStorage = function () {
            /*jslint nomen: true*/
            var _self = this;
            /**
             * init session storage
             * @param successCB () synchronous callback
             * @param errorCB (error) synchronous callback
             * @returns {Object} the object that invoked the function
             */
            _self.init = function (successCB, errorCB) {
                if (typeof Storage) {
                    if (successCB && typeof successCB === 'function') {
                        successCB();
                    } else {
                        return _self;
                    }
                } else {
                    if (errorCB && typeof errorCB === 'function') {
                        errorCB(CONSTANT.ERROR.DB.SESSION_STORAGE.INIT);
                    } else {
                        throw CONSTANT.ERROR.DB.SESSION_STORAGE.INIT;
                    }
                }

            };
            /**
             * clear session storage
             * @param successCB
             * @param errorCB
             * @returns {this}
             */
            _self.clearData = function (successCB, errorCB) {
                try {
                    sessionStorage.clear();
                    if (successCB && typeof successCB === 'function') {
                        successCB();
                    } else {
                        return _self;
                    }
                } catch (err) {
                    if (errorCB && typeof errorCB === 'function') {
                        errorCB(err);
                    } else {
                        throw err;
                    }
                }
            };

            /**
             * save data into session storage
             * @param data {Object} should contain `key`
             * @param successCB () synchronous callback
             * @param errorCB (error) synchronous callback
             */
            _self.saveData = function (data, successCB, errorCB) {
                var dataToSave = data.constructor === Object ? JSON.stringify(data) : data,
                    keyToSave = data.key;

                try {
                    if (!keyToSave) {
                        throw CONSTANT.ERROR.DB.SESSION_STORAGE.KEY;
                    }
                    sessionStorage.setItem(keyToSave, dataToSave);
                    if (successCB && typeof successCB === 'function') {
                        successCB();
                    }
                } catch (err) {
                    if (errorCB && typeof errorCB === 'function') {
                        errorCB();
                    } else {
                        throw err;
                    }
                }
            };
            /**
             * get data from session storage
             * @param key {String} the key of the data
             * @param successCB (Object)
             * @param errorCB (error) synchronous callback
             */
            _self.readData = function (key, successCB, errorCB) {
                try {
                    if (!key || typeof key !== 'string') {
                        throw CONSTANT.ERROR.DB.SESSION_STORAGE.KEY;
                    }
                    var data = sessionStorage.getItem(key);
                    if (successCB && typeof successCB === 'function') {
                        successCB(JSON.parse(data));
                    } else {
                        return JSON.parse(data);
                    }
                } catch (err) {
                    if (errorCB && typeof errorCB === 'function') {
                        errorCB();
                    } else {
                        throw err;
                    }
                }
            };
            /**
             * put mock up data into session storage
             * mock up data is placed in constant.js
             * @param successCB ({Object})
             * @param errorCB ({String})
             */
            _self.initMockUpData = function (successCB, errorCB) {
                function successCB_1() {
                    try {
                        _self.saveData(CONSTANT.SAMPLE_ENTRY);
                        if (successCB && typeof successCB === 'function') {
                            // this is only for simulation, not for production
                            successCB(CONSTANT.SAMPLE_ENTRY.data);
                        }
                    } catch (err) {
                        if (errorCB && typeof errorCB === 'function') {
                            errorCB(err);
                        } else {
                            throw err;
                        }
                    }
                }
                _self.init(successCB_1);
            };
            /*jslint nomen: false*/
        };
    }
    return DataStorage;
});