Ext.define('FV.view.Viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.viewport',

    requires: [
        'FV.view.Main',
        'Ext.layout.container.Card'],

    layout: 'card',

    items: [
        {
            xtype: 'main',
            itemId: 'main'
        }
    ],

    initComponent: function () {
        this.callParent(arguments);
    },

    showMain: function () {
        this.getLayout().setActiveItem('main');
    }
});
