/**
 * Author: Ken
 * Date: 16/05/2013
 * Time: 23:44
 */
require.config({
    paths: {
        'newentrytest' : '/test/javascripts/newentrytest',
        'datastoragetest' : '/test/javascripts/datastoragetest',
        'catwalksdomtest' : '/test/javascripts/catwalksdomtest'
    }
});
/*global QUnit*/
QUnit.config.autostart = false;
require(['newentrytest',
    'datastoragetest',
    'catwalksdomtest'], function (newentrytest, datastoragetest, catwalksdomtest) {
    "use strict";
    QUnit.start();
    // run one by one
//    newentrytest.RunTests();
    datastoragetest.RunTests();
//    catwalksdomtest.RunTests();
});
