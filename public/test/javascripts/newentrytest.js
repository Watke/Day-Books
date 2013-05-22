/**
 * Author: Ken
 * Date: 20/05/2013
 * Time: 10:35
 */
/*global define,test,equal*/
define(['jquery', '../../javascripts/newEntry.js',
    '../../test/javascripts/constantfortest.js',
    '../../javascripts/catwalksDOM.js'], function ($, NewEntry, CONSTANT_TEST, CatwalksDOM) {
    "use strict";
    return {
        RunTests : function () {
            module('New Entry');
            test('getInputData - get data from new entry form', function () {
                // JSLint suggestion and prevent confused from hoisting
                var aCatwalksDOM = new CatwalksDOM(),
                    newEntryWrap = $('#newEntryWrap'),
                    aNewEntry = new NewEntry(),
                    data = {},
                    type,
                    entry,
                    entryDate,
                    accountNo,
                    contraAccount,
                    accountName,
                    contraAccountName,
                    cardType,
                    amount,
                    text,
                    currency;
                // create the add-new-entry form
                aCatwalksDOM.addNewEntry()
                    .showElementById('newEntryWrap')
                    .showElementById('newEntryMask')
                    .initSelectBox()
                    .initCurrencyList();
                // now we have the html elements
                type = $('#type');
                entry = $('#entry');
                entryDate = $('#entryDate');
                accountNo = $('#accountNo');
                contraAccount = $('#contraAccount');
                accountName = $('#accountName');
                contraAccountName = $('#contraAccountName');
                cardType = $('#cardType');
                amount = $('#amount');
                text = $('#text');
                currency = $('#currency');
                // should be all empty
                equal(type.val(), '');
                equal(entry.val(), '');
                equal(entryDate.val(), '');

                equal(accountNo.val(), '');
                equal(contraAccount.val(), '');
                equal(accountName.val(), '');
                equal(contraAccountName.val(), '');

                equal(cardType.val(), '');
                equal(amount.val(), '');
                equal(text.val(), '');
                equal(currency.val(), 'EUR');

                // put data on each field
                type.val(CONSTANT_TEST.NEW_ENTRY.TEST.type);
                entry.val(CONSTANT_TEST.NEW_ENTRY.TEST.ENTRY);
                entryDate.val(CONSTANT_TEST.NEW_ENTRY.TEST.DATE);

                accountNo.val(CONSTANT_TEST.NEW_ENTRY.TEST.ACCOUNT);
                contraAccount.val(CONSTANT_TEST.NEW_ENTRY.TEST.CONTRA_ACCOUNT);
                accountName.val(CONSTANT_TEST.NEW_ENTRY.TEST.accountName);
                contraAccountName.val(CONSTANT_TEST.NEW_ENTRY.TEST.contraAccountName);

                cardType.val(CONSTANT_TEST.NEW_ENTRY.TEST.cardType);
                amount.val(CONSTANT_TEST.NEW_ENTRY.TEST.AMOUNT);
                text.val(CONSTANT_TEST.NEW_ENTRY.TEST.TEXT);
                currency.val(CONSTANT_TEST.NEW_ENTRY.TEST.CURRENCY);
                // add other data which is not from the form
                data.INVOICE = '';
                data.VAT_1 = '';
                data.VAT_2 = '';

                // get data from the form, synchronous function
                data = aNewEntry.getInputData().data;
                // HOW: data retrieved from the form v.s. from getInputData() function
                equal(type.val(), data.type);
                equal(entry.val(), data.ENTRY);
                equal(entryDate.val(), data.DATE);

                equal(accountNo.val(), data.ACCOUNT);
                equal(contraAccount.val(), data.CONTRA_ACCOUNT);
                equal(accountName.val(), data.accountName);
                equal(contraAccountName.val(), data.contraAccountName);

                equal(cardType.val(), data.cardType);
                equal(amount.val(), data.AMOUNT);
                equal(data.TEXT, CONSTANT_TEST.NEW_ENTRY.TEST.TEXT_SANITISED);
                equal(currency.val(), data.CURRENCY);
            });
        }
    };
});