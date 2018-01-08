import jQuery from 'jquery';
import * as _ from 'underscore';
// Setup jquery
window.$ = window.jQuery = jQuery;
window._ = _;

var FontSelectorContainer = require('./FontSelectorContainer');
import styles from './styles/main.scss';
import { fontawesome, opts } from './config/config';



module.exports = ( config => {
    let fcontainer;
    let fonts;
    return {

        init(c) {
            
            // Check if variable exists
            if(!c) {
                console.log('[ERROR]: Can not initialize selector plugin without configurations.')
                return;
            }

            // Initialize the fonts
            else {
                // If no fonts are defined
                if(!c.fonts) {
                    fonts = fontawesome;
                }
            }
            let $el = $(c.container);
             // Empty the html
             $el.html('');
            var fcontainer = new FontSelectorContainer();
            fcontainer.initialize(fonts);
            console.log(fcontainer.render());
            $el.append(fcontainer.render());
        }
    }
})();
