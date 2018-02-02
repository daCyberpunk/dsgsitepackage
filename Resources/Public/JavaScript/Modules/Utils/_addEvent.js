"use strict";


var addEvent = function(element, type, object){
    element.addEventListener(type, object, false);
};

module.exports = addEvent;