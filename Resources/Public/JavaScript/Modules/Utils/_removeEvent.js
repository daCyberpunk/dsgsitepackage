"use strict";

var removeEvent = function(element, type, handler){
    element.removeEventListener(type, handler, false);

};
module.exports = removeEvent;
