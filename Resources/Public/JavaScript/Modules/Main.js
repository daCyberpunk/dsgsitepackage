const _navigation = require('./_navigation');
const _callAfterResize = require('./Utils/_callAfterResize');
const _toTop = require('./_toTop');


(function(){
    let toTopButton;
    let nav = false;

    function initNav(){
        if(nav){
            nav.destruct();
        }
        nav = new _navigation();
    }
    nav = new _navigation();
    toTopButton = new _toTop('.dsg-ToTop');
    _callAfterResize(initNav);
})();

