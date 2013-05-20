/**
 * Author: Ken
 * Date: 20/05/2013
 * Time: 10:58
 */
/*global define*/
define(function () {
    "use strict";
    return {
        NEW_ENTRY : {
            TEST : {
                BRAND : 'TEST_BRAND',
                PRODUCT_NAME : 'TEST_PRODUCT',
                INGREDIENT : 'TEST_INGREDIENT'
            }
        },
        REG_EXR : {
            SEQUENCE : /\d{4}/,
            INGREDIENT_NUMBER : /\d{1,}/
        },
        NEW_INGREDIENT : {
            TEST_ROUNDS : 10
        }
    };
});