const _isParent = require('./Utils/_isParent');
const _addEvent = require('./Utils/_addEvent');
const _removeEvent = require('./Utils/_removeEvent');

class _navigation {
    constructor() {
        this.init();
    }
    destruct(){
        var me = this;
        [].map.call(document.querySelectorAll('.dsg-MainNav-item--hasChildren'), function(el) {
            _removeEvent(el,'click',me.mainNavItemClick);
            el.classList.remove('dsg-MainNav-item--selected');
        });
        [].map.call(document.querySelectorAll('.dsg-MainNav'), function(el) {
            el.classList.remove('dsg-MainNav--isVisible');
        });
        _removeEvent(document.querySelector('.dsg-NavButton-icon'),'click',_navigation.navButtonClick);
        [].map.call(document.querySelectorAll('.dsg-NavButton-icon'), function(el) {
            el.classList.add('fa-bars');
            el.classList.remove('fa-times');
        });
    }
    init(){
        var me = this;
        if (_navigation.isMobileNav() === true) {
            [].map.call(document.querySelectorAll('.dsg-MainNav-item--hasChildren'), function(el) {
                _addEvent(el,'click',me.mainNavItemClick);
            });
            _addEvent(document.querySelector('.dsg-NavButton-icon'),'click',_navigation.navButtonClick);
        }
    }
    static isMobileNav(){
        var element = document.getElementsByClassName('dsg-NavButton')[0];
        return (element.currentStyle ? element.currentStyle.display :
            getComputedStyle(element, null).display) != 'none';
    }
    mainNavItemClick(e){
        if(e.target.closest('.dsg-MainNav-item').classList.contains('dsg-MainNav-item--hasChildren')){
            e.preventDefault();
        }
        e.stopPropagation();
        var $this = e.target.closest('.dsg-MainNav-item--hasChildren');
        $this.classList.toggle('dsg-MainNav-item--selected');
        [].map.call(document.querySelectorAll('.dsg-MainNav-item--hasChildren'), function(el) {
            // console.log(dsg.isParent(el,$this));
            if(_isParent(el,$this) === false) {
                el.classList.remove('dsg-MainNav-item--selected');
            }
        });
    }
    static navButtonClick(e){
        e.preventDefault();
        [].map.call(document.querySelectorAll('.dsg-NavButton-icon'), function(el) {
            el.classList.toggle('fa-bars');
            el.classList.toggle('fa-times');
        });
        [].map.call(document.querySelectorAll('.dsg-MainNav'), function(el) {
            el.classList.toggle('dsg-MainNav--isVisible');
        });

        // beim öffnen alle submenues auf standard setzen
        [].map.call(document.querySelectorAll('.menu .container'), function(el) {
            el.classList.remove('container--is-visible');
        });
        [].map.call(document.querySelectorAll('.menu li'), function(el) {
            el.classList.remove('is-selected');
        });
    }
}



module.exports = _navigation;