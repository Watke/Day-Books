/**
 * Author: Ken
 * Date: 16/05/2013
 * Time: 22:16
 */
require.config({
    paths: {
        'currentEntry' : '/javascripts/currentEntry',
        'dataStorage' : '/javascripts/dataStorage',
        'newEntry' : '/javascripts/newEntry',
        'constant' : '/javascripts/constant',
        'catwalksDOM' : '/javascripts/catwalksDOM'
    }
});
require(["jquery", "currentEntry", "dataStorage", "newEntry", "constant", "catwalksDOM"],
    function ($, CurrentEntry, DataStorage, NewEntry, CONSTANT, CatwalksDOM) {
        "use strict";
        var aCurrentEntry = new CurrentEntry(),
            aDataStorage = new DataStorage(),
            aSessionStorage = new aDataStorage.SessionStorage(),
            aNewEntry = new NewEntry(),
            aCatwalksDOM = new CatwalksDOM();
        // setup mock up data into session storage
        aSessionStorage
            .init() // if support session storage
            .clearData() // clear session storage
            .initMockUpData(function (data) {
                var i;
                aCurrentEntry.init();

                for (i = 0; i < data.length; i += 1) {
                    aCurrentEntry.showCurrentEntry(data[i]);
                }
                aCatwalksDOM.updateFooterByParentId('currentEntry');
            }); // setup mock up data
        // click new Entry
        $(document).on('click', '#newEntry', function () {
            aCatwalksDOM
                .addNewEntry()
                .showElementById('newEntryWrap')
                .showElementById('newEntryMask')
                .initSelectBox()
                .initCurrencyList();
        });
        // select account from sheet
        $(document).on('click', '.selectAccount', function () {
            aCatwalksDOM
                .showAccountSheet(this)
                .updateFooterByParentId('accountSheet')
                .showElementById('accountSheetWrap')
                .hideElementById('newEntryWrap')
                .hideElementById('newEntryMask')
                .showElementById('accountSheetMask');
        });
        // close day-book: the new entry form
        $(document).on('click', '.closeDayBook', function () {
            aCatwalksDOM
                .closeDayBook()
                .hideElementById('newEntryWrap');
        });
        // click save button
        $(document).on('click', '#save', function (e) {
            // when read succeed
            function successCB_2(data) {
                aCurrentEntry.showCurrentEntry(data);
                aCatwalksDOM.removeElementById('numberOfItemsText')
                    .updateFooterByParentId('currentEntry')
                    .closeDayBook()
                    .hideElementById('newEntryWrap');
            }
            // when save succeed
            function successCB_1(data) {
                aCurrentEntry.getEntryByKey(data.key, successCB_2);
            }
            aNewEntry.getInputData().saveData(e, successCB_1);
        });
        // `entry` key event: prevent form submitted unauthorised
        $(document).on('keydown', 'input', function (e) {
            aCatwalksDOM.preventFormDefault(e);
        });
        // select an account from sheet
        $(document).on('click', '#accountSheet table tbody tr', function (e) {
            aCatwalksDOM
                .selectAccount(e, this)
                .removeElementById('accountSheetSection')
                .showElementById('newEntryWrap')
                .showElementById('newEntryMask')
                .removeElementById('accountSheetMask')
                .hideElementById('accountSheetWrap');
        });
    });
