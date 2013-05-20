/**
 * Author: Ken
 * Date: 20/05/2013
 * Time: 10:35
 */
/*global define,test,equal*/
define(['jquery', '../../javascripts/newEntry.js',
    '../../test/javascripts/constantfortest.js'], function ($, NewEntry, CONSTANT_TEST) {
    "use strict";
    return {
        RunTests : function () {
            module('New Entry');
            test('read data from new entry form', function () {
                var i,
                    aNewEntry = new NewEntry(),
                    productForm = $('#productForm'),
                    ingredients = $('.ingredients'),
                    newEntry;
                // set data in the form
                productForm.children('.entry').children('[name="brand"]').val(CONSTANT_TEST.NEW_ENTRY.TEST.BRAND);
                productForm.children('.entry').children('[name="productName"]').val(CONSTANT_TEST.NEW_ENTRY.TEST.PRODUCT_NAME);
                for (i = 0; i < ingredients.length; i += 1) {
                    $(ingredients.children('input')[i]).val(CONSTANT_TEST.NEW_ENTRY.TEST.INGREDIENT);
                }
                // get data out from the form
                newEntry = aNewEntry.getInput().newEntry;
                equal(newEntry.brand, CONSTANT_TEST.NEW_ENTRY.TEST.BRAND);
                equal(newEntry.productName, CONSTANT_TEST.NEW_ENTRY.TEST.PRODUCT_NAME);
                for (i = 0; i < newEntry.ingredients.length; i += 1) {
                    equal(newEntry.ingredients[i], CONSTANT_TEST.NEW_ENTRY.TEST.INGREDIENT);
                }
            });
            test('test the key', function () {
                var i,
                    aNewEntry = new NewEntry(),
                    productForm = $('#productForm'),
                    ingredients = productForm.children('.entry').children('.ingredients'),
                    newEntry;

                productForm.children('.entry').children('[name="brand"]').val(CONSTANT_TEST.NEW_ENTRY.TEST.BRAND);
                productForm.children('.entry').children('[name="productName"]').val(CONSTANT_TEST.NEW_ENTRY.TEST.PRODUCT_NAME);
                for (i = 0; i < ingredients.length; i += 1) {
                    $(ingredients.children()[i]).val(CONSTANT_TEST.NEW_ENTRY.TEST.INGREDIENT);
                }
                // get data from the form
                newEntry = aNewEntry.getInput().newEntry;

                // test the key
                equal(new RegExp(CONSTANT_TEST.REG_EXR.SEQUENCE).test(newEntry.key), true);
            });
        }
    };
});