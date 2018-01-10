var Backbone = require('backbone');

module.exports = Backbone.View.extend({

    template: _.template(`
        <div class="<%=pfx%>-selectable">
            <div class="selectable-content">
                <i class="fa <%= fontClass%>"></i>
                <span class="preview"><%= preview%></span>
            </div>
        </div>
    `),

    events: {
        'click': 'selectEl'
    },

    initialize(o) {
        this.$el.html(this.template(this.model.attributes));
    },

    selectEl(e) {
        var faClass = this.model.get('fontClass');
        this.trigger('onChange', {class: faClass});
    },
    
    render() {
        return this;
    }
});