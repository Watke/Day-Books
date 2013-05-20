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
            module('Catwalks DOM');
            test('add another new lines of ingredients ', function () {
                var i,
                    aCatwalksDOM = new CatwalksDOM(),
                    // prototype chain would not continue
                    currentIngredientNumber = $('.ingredients').length;
                equal(new RegExp(currentIngredientNumber.toString()).test(CONSTANT_TEST.REG_EXR.INGREDIENT_NUMBER),
                    true);
                // do not use self increment, due to security reason
                for (i = 0; i < CONSTANT_TEST.NEW_INGREDIENT.TEST_ROUNDS; i += 1) {
                    aCatwalksDOM.addNewIngredient();
                    currentIngredientNumber += 1;
                    equal($('.ingredients').length, currentIngredientNumber);
                }
                equal($('.ingredients').length,
                    CONSTANT_TEST.NEW_INGREDIENT.TEST_ROUNDS + 1); // including the original DOM
            });

            test('remove ingredients ', function () {
                var i,
                    totalAddedIngredients,
                    aCatwalksDOM = new CatwalksDOM(),
                // prototype chain would not continue
                    currentIngredientNumber = $('.ingredients').length;
                // do not use self increment, due to security reason
                for (i = 0; i < CONSTANT_TEST.NEW_INGREDIENT.TEST_ROUNDS; i += 1) {
                    aCatwalksDOM.addNewIngredient();
                    currentIngredientNumber += 1;
                }
                totalAddedIngredients = $('#ingredientWrap').children().length;
                // only test added ingredients and does not include the original one
                equal(totalAddedIngredients,
                    CONSTANT_TEST.NEW_INGREDIENT.TEST_ROUNDS);

                // remove ingredient Node from DOM
                for (i = 0; i < CONSTANT_TEST.NEW_INGREDIENT.TEST_ROUNDS; i += 1) {
                    totalAddedIngredients -= 1;
                    // overwrite `this`, simulating when it is clicked by a user.
                    aCatwalksDOM.removeIngredient.call($('.removeIngredient')[totalAddedIngredients]);
                    equal($('#ingredientWrap').children().length, totalAddedIngredients);
                }
                equal($('#ingredientWrap').children().length, 0);
            });
        }
    };
});