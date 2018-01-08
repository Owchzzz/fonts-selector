var Backbone = require('backbone');
var Selectors = require('./Selectors');
module.exports = Backbone.Model.extend({
    initialize(o) {
        this.collection = o;
    }
});