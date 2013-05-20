/**
 * Author: Ken
 * Date: 20/05/2013
 * Time: 13:13
 */
/*global define, test, equal, deepEqual, ok*/
define(['../../javascripts/dataStorage.js',
    '../../javascripts/constant.js',
    '../../test/javascripts/constantfortest.js'], function (DataStorage, CONSTANT, CONSTANT_TEST) {
    "use strict";
    return {
        RunTests : function () {
            module('Data Storage');
            test('init mock up data storage', function () {
                var i,
                    name,
                    aDataStorage = new DataStorage(),
                    aSessionStorage = new aDataStorage.SessionStorage(),
                    newEntry = {};
                // init mock up data into session storage
                aSessionStorage.init().initMockUpData();
                newEntry = aSessionStorage.readData(CONSTANT.SAMPLE_ENTRY.key).data;
                for (i = 0; i < newEntry.length; i += 1) {
                    for (name in newEntry[i]) {
                        // prevent for-in statement looks into object's prototype chain
                        if (newEntry[i].hasOwnProperty(name)) {
                            ok(true);
                        }
                    }
                }

            });
        }
    };
});