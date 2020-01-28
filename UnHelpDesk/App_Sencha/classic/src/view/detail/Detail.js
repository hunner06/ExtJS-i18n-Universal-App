Ext.define('UnAntaresHelpDesk.view.detail.Detail', {
    extend: 'Ext.panel.Panel',
    xtype: 'detail',
    itemId:'detail',
    requires: [
        'UnAntaresHelpDesk.view.detail.DetailController',
        'UnAntaresHelpDesk.view.detail.DetailModel',
    ],
    controller: 'detail',
    viewModel: 'detail',
   
    height: 500,
    
    bind: {
        html: '{loremIpsum}',
        title: '{detailTitle}',
    },
    closable: false
});