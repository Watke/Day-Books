/**
 * Author: Ken
 * Date: 18/05/2013
 * Time: 15:51
 */
/*global define, EJS*/
define(['jquery',
    '../javascripts/constant.js'], function ($, CONSTANT) {
    "use strict";
    function CatwalksDOM() {
        // private members
        var self = this; // NOTE: Capital constructor enable `validthis`

        self.addNewIngredient = function () {
            // private member
            var newIngredientHTML = new EJS({url : '/templates/addNewEntry.ejs'}).render();
            $('#ingredientWrap').append(newIngredientHTML);
            // enable chain
            return self;
        };

        self.removeIngredient = function () {
            // private member
            var myIngredient = this.parentNode;
            $(myIngredient).remove();
            return self;
        };

        self.successUpdateOk = function () {
            function hideElementById(id) {
                var element = document.getElementById(id);
                element.setAttribute('style', 'display:none;');
            }
            function showElementById(id) {
                var element = document.getElementById(id);
                element.setAttribute('style', 'display:inline;');
            }
            showElementById('updateOk');
            setTimeout(function () {
                hideElementById('updateOk');
            }, CONSTANT.DOM.DISAPPEAR_TIME);
        };

        self.clearInput = function () {
            var inputNode = $('input[type=text]');
            inputNode.val('');
        };
    }
    return CatwalksDOM;
});