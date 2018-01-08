var Backbone = require('backbone');

module.exports = Backbone.View.extend({
    template: _.template(`
        <div class="selectable">
            <i class="fa <%= fontClass%></i>
            <span class="selectSample"><%= fontSample %></span>
        </div>
    `),

    initialize(o) {
        this.$el.html(this.template(this.model.attributes));
    },

    render() {
        return this;
    }
});