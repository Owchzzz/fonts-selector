var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
    defaults: {
        preview: '',
        fontClass: 'fa',
        fontSample: ''
    },
    
    initialize(o) {
        this.set('fontClass',o.fontClass);
        this.set('fontSample',o.fontSample);
    }
});