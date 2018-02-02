"use strict";


var _callAfterResize = function(callback){
    var event = new Event('resizeEnd');
    var timeout = false;

    window.addEventListener('resizeEnd', function() {
        callback();
    });
    window.addEventListener('resize', function() {
        clearTimeout(timeout);
        timeout = setTimeout(function(){
            window.dispatchEvent(event);
        }, 250);
    });

};



module.exports = _callAfterResize;

