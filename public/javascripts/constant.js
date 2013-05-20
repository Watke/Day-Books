/**
 * Author: Ken
 * Date: 17/05/2013
 * Time: 00:15
 */
/*global define*/
define(function () {
    "use strict";
    return {
        SAMPLE_ENTRY : {
            key : 'sample_entry',
            data : [
                {
                    DATE : '17.12.12',
                    ENTRY : '50169',
                    INVOICE : '',
                    TEXT : 'Derp Receipt',
                    AMOUNT : '-123.00',
                    ACCOUNT : '111',
                    VAT_1 : '',
                    CONTRA_ACCOUNT : '1200',
                    VAT_2 : '',
                    CURRENCY : ''
                },
                {
                    DATE : '17.12.12',
                    ENTRY : '50168',
                    INVOICE : '',
                    TEXT : 'Schmidt & Co. Receipt',
                    AMOUNT : '-123.00',
                    ACCOUNT : '102',
                    VAT_1 : '',
                    CONTRA_ACCOUNT : '1200',
                    VAT_2 : '',
                    CURRENCY : 'USD'
                },
                {
                    DATE : '17.12.12',
                    ENTRY : '50167',
                    INVOICE : '',
                    TEXT : 'test & Co. test',
                    AMOUNT : '-90.00',
                    ACCOUNT : '102',
                    VAT_1 : '',
                    CONTRA_ACCOUNT : '1200',
                    VAT_2 : '',
                    CURRENCY : 'USD'
                }
            ]
        },
        ERROR : {
            DB : {
                INIT : {
                    NAME : 'Error',
                    MESSAGE : 'no initialisation callback'
                },
                SAVE : {
                    NAME : 'Error',
                    MESSAGE : 'no save data callback'
                },
                SESSION_STORAGE : {
                    INTI : {
                        NAME : 'Error',
                        MESSAGE : 'no session storage support'
                    },
                    KEY : {
                        NAME : 'Error',
                        MESSAGE : 'key is missing'
                    }
                },
                SEQUENCE : {
                    NAME : 'Error',
                    MESSAGE : 'invalid sequence'
                }
            }
        },
        DOM : {
            DISAPPEAR_TIME : 3000
        }
    };
});