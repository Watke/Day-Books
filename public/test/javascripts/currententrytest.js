/**
 * Author: Ken
 * Date: 20/05/2013
 * Time: 13:18
 */
/*global define,test,equal*/
define(['jquery',
    '../../javascripts/currentEntry.js',
    '../../test/javascripts/constantfortest.js',
    '../../javascripts/dataStorage.js'], function ($, CurrentEntry, CONSTANT_TEST, DataStorage) {
    "use strict";
    return {
        RunTests : function () {
            module('Current Entry');
            test('append pre-setup entry onto page', function () {
                var aCurrentEntry = new CurrentEntry(),
                    aDataStorage = new DataStorage(),
                    aSessionStorage = new aDataStorage.SessionStorage();
                // setup mock up data into session storage
                aSessionStorage
                    .init() // if support session storage
                    .clearData() // clear session storage
                    .initMockUpData(function (data) {
                        var i,
                            currentEntryLength = 0;
                        aCurrentEntry.init();

                        for (i = 0; i < data.length; i += 1) {
                            aCurrentEntry.showCurrentEntry(data[i]);
                            currentEntryLength += 1; // for security reason, no self-increment
                            equal($('#entryRowWrap').children().length, currentEntryLength);
                        }

                    }); // setup mock up data
            });
        }
    };
});