class _fragmentManager {
    constructor() {

    }

    create(type, frag, elClass){
        let element = document.createElement(type);
        if(elClass) {
            element.className = elClass;
        }
        frag.appendChild(element);
        return frag;
    }
}
module.exports = _fragmentManager;