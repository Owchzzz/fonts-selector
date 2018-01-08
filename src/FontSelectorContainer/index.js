var SelectorContainerView = require('./view/SelectorContainerView');
var SelectorContainer = require('./model/SelectorContainer');
var Selectors = require('./model/Selectors');
var Selector = require('./model/Selector');
module.exports = () => {
    let scv, selectors, scm;
    selectors = new Selectors();
    
    return {
        view: false,

        initialize(o) {
            var fonts = o;
            _.each(fonts, (font) => {
                var selector = new Selector({fontClass: font, fontSample: 'test'});
                selectors.add(selector);
            });
            scm = new SelectorContainer(selectors);
            scv = new SelectorContainerView({
                model: scm
            });
            this.view = scv;
        },

        render() {
            return this.view.render();
        }
    }
};