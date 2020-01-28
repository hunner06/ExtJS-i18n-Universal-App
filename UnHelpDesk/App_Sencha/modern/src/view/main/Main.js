/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('UnAntaresHelpDesk.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    itemId: 'app-main',
    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },

    tabBarPosition: 'bottom',

    items: [
        // TODO - Replace the content of this view to suit the needs of your application.
        {
            title: 'Home',
            itemId: 'home-tab',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'mainlist'
            }]
        }, {
            itemId: 'users-tab',
            title: 'Users',
            iconCls: 'x-fa fa-user',
            bind: {
                html: '{loremIpsum}'
            }
        }, {
            itemId: 'detail-tab',
            title:'Details',
            //bind: {
            //    title: '{navTitleDetail}',
            //},

            iconCls: 'x-fa fa-user',
            items: [{
                xtype: 'detail'
            }]
        }, {
            itemId: 'settings-tab',
            title: 'Settings',
            iconCls: 'x-fa fa-cog',
            bind: {
                html: '{loremIpsum}'
            }
        }
    ]
});
