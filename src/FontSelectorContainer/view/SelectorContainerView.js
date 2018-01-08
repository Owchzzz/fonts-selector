/**
 * Selector Container View
 * @description The selector container div
 */
var Backbone = require('backbone');
var SelectorView = require('./SelectorView');

module.exports = Backbone.View.extend({
    template: _.template(`
        <div class="">
            <div class="selector-open"><b>Click me</b></div>
            <div class="selectors"></div>
        </div>
    `),

    initialize(o) {
        this.fonts = this.model.collection;
        this.$el.html(this.template());

        this.selectors = this.$el.find('selectors');
        this.fonts.each((font) => {
            var selector = new SelectorView({model: font});
            this.$el.find('.selectors').append(selector.render().$el);
        });

    },

    render() {
        return this.$el;
    }
});