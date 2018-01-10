/**
 * Selector Container View
 * @description The selector container div
 */
var Backbone = require('backbone');
var SelectorView = require('./SelectorView');

module.exports = Backbone.View.extend({

    template: _.template(`
        <div class="<%=pfx%>">
            <div class="selector-btn"><input id="fontName" value="SELECT A FONT"/><i id="fontClass"></i> </div>

            <div class="selectors">
                <div class="header"><h1>SELECT A FONT</H1> <b class="backBtn">Back</b>
                <div style="clear:both;"></div></div>
                <div class="contents"></div>
            </div>
        </div>
    `),

    initialize(o) {
        console.log('opts:',o);
        // Initialize variables
        _.bindAll(this,'toggleSelectors');
        this.fonts = this.model.collection;
        this.toggled = false;
        this.parent = o.config.parent;
        this.$el.html(this.template({pfx: o.config.pluginPrefix}));

        // Declare Buttons
        this.selectorBtn = $(this.$el.find('.selector-btn'));
        this.backBtn = $(this.$el.find('.backBtn'));
        this.selectors = $(this.$el.find('.selectors'));
        
        // Bind Events
        this.selectorBtn.on('click',this.toggleSelectors);
        this.backBtn.on('click',this.toggleSelectors);

        this.fonts.each((font) => {
            var selector = new SelectorView({model: font});
            $(this.selectors).find('.contents').append(selector.render().$el);
            this.listenTo(selector,'onChange',this.changed);
        });

    },

    changed(data) {
        $(this.selectorBtn).find('#fontName').val(data.class);
        $(this.selectorBtn).find('#fontClass').removeClass().addClass('fa '+data.class);

        this.model.set('font',data.class);
        this.parent.value = data.class;
        
        if(this.parent.changeEvent) {
            this.parent.changeEvent(data.class);
        }
        this.toggleSelectors();
    },

    value() {
        return this.model.get('font');
    },

    toggleSelectors(e) {
        
        if(! this.toggled) 
            $(this.selectors).show();
        else
            $(this.selectors).hide();
        
        this.toggled = !this.toggled;
    },

    render() {
        return this.$el;
    },

});