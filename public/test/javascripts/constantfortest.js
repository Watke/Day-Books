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
                type : 'Journal',
                ENTRY : '12345',
                DATE : '2013-06-13',
                DATE_FORMATTED : '13.06.13',

                ACCOUNT : '1190',
                CONTRA_ACCOUNT : '1200',
                accountName : 'Johnson and Johnson',
                contraAccountName : 'Aleksi Prominence',

                cardType : 'Debit',
                AMOUNT : '444.90',
                TEXT : 'Test text HHJJK @#$%$#&$^%*&^%123',
                CURRENCY : 'CNY',
                // add other data which is not from the form
                INVOICE : '',
                VAT_1 : '',
                VAT_2 : ''
            },
            REG_EXR : {
                SEQUENCE : /\d{4}/,
                INGREDIENT_NUMBER : /\d{1,}/
            },
            NEW_INGREDIENT : {
                TEST_ROUNDS : 10
            }
        }
    };
});