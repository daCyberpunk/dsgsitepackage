const _scroll = require('./Utils/_scroll');
const _addEvent = require('./Utils/_addEvent');


class _toTop {
    constructor ( buttonSelector) {
        this.button = document.querySelectorAll(buttonSelector)[0];
        this.init();
    }

    init(){
        if ( !this.button ) {
            console.info('Please call "new _toTop([SELECTOR]) where SELECTOR is a existing element on page');
            return;
        }

        _addEvent(this.button,'click',this.scrollToTop.bind());
        _addEvent(window,'scroll',this.showButton.bind(this.button));

    }
    scrollToTop(e){
        e.preventDefault();
        _scroll(
            document.querySelector('body'),
            300,
            'easeOutQuad'
        );
    }

    showButton(){
        if ( window.scrollY > 50 ) {
            this.classList.add('dsg-ToTop--visible');
        } else {
            this.classList.remove('dsg-ToTop--visible');
        }
    }

}


module.exports = _toTop;
