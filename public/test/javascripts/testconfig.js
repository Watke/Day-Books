/**
 * Author: Ken
 * Date: 16/05/2013
 * Time: 23:44
 */
require.config({
    paths: {
        'newentrytest' : '/test/javascripts/newentrytest',
        'datastoragetest' : '/test/javascripts/datastoragetest',
        'catwalksdomtest' : '/test/javascripts/catwalksdomtest',
        'currententrytest' : '/test/javascripts/currententrytest'
    }
});
/*global QUnit*/
QUnit.config.autostart = false;
require(['newentrytest',
    'datastoragetest',
    'catwalksdomtest',
    'currententrytest'], function (newentrytest, datastoragetest, catwalksdomtest, currententrytest) {
    "use strict";
    QUnit.start();
    // run one by one
    newentrytest.RunTests();
    datastoragetest.RunTests();
    catwalksdomtest.RunTests();
    currententrytest.RunTests();
});
