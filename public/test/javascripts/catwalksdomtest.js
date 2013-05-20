/**
 * Author: Ken
 * Date: 20/05/2013
 * Time: 16:02
 */
/*global define, test, equal, deepEqual*/
define(['jquery',
    '../../javascripts/catwalksDOM.js',
    '../../test/javascripts/constantfortest.js'], function ($, CatwalksDOM, CONSTANT_TEST) {
    "use strict";
    return {
        RunTests : function () {
            module('Catwalks DOM: addNewEntry');
            test('create the add-new-entry form', function () {
                var aCatwalksDOM = new CatwalksDOM(),
                    newEntryWrap = $('#newEntryWrap'),
                    // prototype chain would not continue
                    newEntryWrapChildrenNumber = newEntryWrap.children().length;
                equal(newEntryWrapChildrenNumber, 0);
                aCatwalksDOM.addNewEntry();
                // 1 section and 1 dive
                equal(newEntryWrap.children().length, 2);
            });

            module('Catwalks DOM: showAccountSheet');
            test('create the account sheet form', function () {
                var aCatwalksDOM = new CatwalksDOM(),
                    accountSheetWrap = $('#accountSheetWrap'),
                    // prototype chain would not continue
                    accountSheetWrapChildrenNumber = accountSheetWrap.children().length;
                equal(accountSheetWrapChildrenNumber, 0);
                aCatwalksDOM.showAccountSheet();
                // 1 section and 1 dive
                equal(accountSheetWrap.children().length, 2);
            });

            module('Catwalks DOM: updateFooterByParentId');
            test('update footer of each table', function () {
                var p,
                    pText,
                    footer,
                    footerLength,
                    aCatwalksDOM = new CatwalksDOM();
                // add account sheet, because it has footer
                aCatwalksDOM.showAccountSheet();
                footer = $('#numberOfItems');
                footerLength = footer.children().length;
                equal(footerLength, 0);
                // update footer
                aCatwalksDOM.updateFooterByParentId('accountSheet');
                // prototype chain would not continue, so not use `footerLength`
                equal(footer.children().length, 1);
                p = $('#numberOfItems p');
                pText = p.text();
                equal(pText.slice(0, 1), '4'); // because I hard coded
            });
        }
    };
});