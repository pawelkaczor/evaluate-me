Ext.define('FV.view.order.Show', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ordershow',
    cls: 'cb-orderpanel',

    requires: [
        'FV.view.order.View',
        'FV.view.order.Files'
        ],

    layout: 'border',
    border: false,
    closable: false,

    dockedItems: [{
        dock: 'top',
        xtype: 'toolbar',
        border: false,
        items: [{
            text: 'Save',
            action: 'save'}]}],

    items: [{
        xtype: 'panel'/*'postgrid'*/,
        region: 'center',
        margins: '2 0 0 5',
        border: true},
    {
        xtype: 'orderfiles',
        region: 'south',
        height: 100,
        margins: '5 0 0 0',
        border: true},
    {
        region: 'west',
        width: '40%',
        layout: 'border',
        border: false,
        items: [{
            xtype: 'orderview',
            region: 'north',
            height: 100,
            margins: '2 0 0 0',
            border: true},
        {
            xtype: 'panel'/*'supplygrid'*/,
            region: 'center',
            margins: '5 0 0 0',
            border: true}]}],

    initComponent: function () {
        this.callParent(arguments);
    }
});
