"use strict";

var _isParent = function(parentNode, childNode){
    if('contains' in parentNode) {
        return parentNode.contains(childNode);
    }
    else {
        return parentNode.compareDocumentPosition(childNode) % 16;
    }

};
module.exports = _isParent;

