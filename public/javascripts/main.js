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

            }); // setup mock up data


    });