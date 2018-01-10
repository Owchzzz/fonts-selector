import jQuery from 'jquery';
import * as _ from 'underscore';
// Setup jquery
window.$ = window.jQuery = jQuery;
window._ = _;

var FontSelectorContainer = require('./FontSelectorContainer');
import styles from './styles/main.scss';
import { fontawesome, opts } from './config/config';



module.exports = (o) => {
    let fcontainer;
    let fonts;
    let $el;
    return {

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
            fcontainer.initialize(fonts,opts);
            console.log(fcontainer.render());
            $el.append(fcontainer.render());

            return this;
        },
        setChange(e) {
            $el.on('change',e);
        },
        getValue() {
            return fcontainer.value();
        }
    }
}
