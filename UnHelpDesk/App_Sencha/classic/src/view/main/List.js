/**
 * This view is an example list of people.
 */
Ext.define('UnAntaresHelpDesk.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    itemId: 'mainlist',
    itemId: 'app-list',
    requires: [
        'UnAntaresHelpDesk.store.Personnel',
        'UnAntaresHelpDesk.view.main.ListModel'
    ],
    viewModel: 'list',
    bind: {
        title: '{title}',
    },
   

    store: {
        type: 'personnel'
    },

    columns: [{ 
        bind: {
            text: '{ctName}',
        },
        dataIndex: 'name',
        width: 100,
        cell: {
            userCls: 'bold'
        }
    }, {
         bind: {
            text: '{ctEmail}',
        },
        dataIndex: 'email',
        width: 230 
    }, { 
         bind: {
            text: '{ctPhone}',
        },
        dataIndex: 'phone',
        width: 150 
    }],

    listeners: {
        select: 'onItemSelected'
    }
});
