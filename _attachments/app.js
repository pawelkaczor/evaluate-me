Ext.Loader.setConfig({
    enabled: true,
    disableCaching: false,
    paths: {
        'FV': 'app',
        'Sch': 'vendor/senchacouch'
    }
});

Ext.application({
    name: 'FV',
    controllers: [
        'Orders'],
    autoCreateViewport: true,
    launch: function () {
        console.log("ExtJS launched " + Ext.getVersion('extjs'));
    }
});