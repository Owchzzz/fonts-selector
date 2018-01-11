// Import
import * as _ from 'underscore';

// Setup jquery
window._ = _;

import styles from './styles/main.scss';
import { fontawesome, opts } from './config/config';

// Require dependencies
var FontSelectorContainer = require('./FontSelectorContainer');

module.exports = (o) => {
    let fcontainer;
    let fonts;
    let $el;
    return {
        value: false,
        /**
         * Initialize the module
         * @param {Object} c Object Configurations 
         */
        init(c) {
            // Check if variable exists
            if(!c) {
                console.log('[ERROR]: Can not initialize selector plugin without configurations.')
                return;
            }
            else {
                // If no fonts are defined
                if(!c.fonts) {
                    fonts = fontawesome;
                }
                // If config setting for chage
                if(c.onChange) {
                    this.changeEvent = c.onChange;
                }
                
            }
            $el = $(c.container);  
            $el.html(''); // Empty the html

            //initialize the container
            fcontainer = new FontSelectorContainer();
            opts.parent = this;

            //Initialize the container
            fcontainer.initialize(fonts,opts);

            // Append to element
            $el.append(fcontainer.render());

            return this;
        },

        /**
         * Attach an on change function
         * @param {Function} e Function call 
         */
        setChange(e) {
            $el.on('change',e);
        },

        /**
         * Get the value
         */
        getValue() {
            return fcontainer.value();
        }
    }
}
