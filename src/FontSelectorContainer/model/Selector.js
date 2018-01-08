var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
    initialize(o) {
        this.set('fontClass',o.fontClass);
        this.set('fontSample',o.fontSample);
    }
});