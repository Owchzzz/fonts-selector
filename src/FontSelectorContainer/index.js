var SelectorContainerView = require('./view/SelectorContainerView');
var SelectorContainer = require('./model/SelectorContainer');
var Selectors = require('./model/Selectors');
var Selector = require('./model/Selector');
module.exports = () => {
    let scv, selectors, scm;
    selectors = new Selectors();
    
    return {
        view: false,

        initialize(o,opts) {
            var fonts = o;
            _.each(fonts, (font) => {
                var selector = new Selector({pfx: opts.pluginPrefix, fontClass: font, fontSample: 'test'});
                selectors.add(selector);
            });
            scm = new SelectorContainer(selectors);
            scv = new SelectorContainerView({
                model: scm,
                config: opts
            });

            this.view = scv;
        },

        render() {
            return this.view.render();
        },

        value() {
            return scm.get('font');
        }
    }
};