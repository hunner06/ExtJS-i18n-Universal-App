Ext.define('UnAntaresHelpDesk.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    routes: {
        'home': 'setTab',
        'detail': 'setTab',
        'detail-:id': 'setTab',
        'users': 'setTab',
        'groups': 'setTab',
        'settings':'setTab',
    },

    control: {
        'app-main': {
            tabchange: function (tabPanel, newCard, oldCard) {
                var newTabToken = newCard.itemId.substring(0, newCard.itemId.indexOf('-'));
                this.redirectTo(newTabToken);
            },
            activeItemchange: function (sender, value, oldValue) {
                if (value != null) {
                    var newTabToken = value._itemId.substring(0, value._itemId.indexOf('-'));
                    this.redirectTo(newTabToken);
                }
                
            },
            add: function () {
                if (localStorage.getItem('lang') == 'es') {
                    this.getView().setViewModel('main-es');

                    Ext.ComponentQuery.query('#app-list')[0].setViewModel('app-list-es');

                  Ext.ComponentQuery.query('#detail')[0].setViewModel('detail-es');
                }
              
            }
        }
    },
    tabs: function () {
        return this.getView();
    },
    setTab: function () {
        name = window.location.hash.split('#')[1].split('-')[0];
        if (this.isModern()) {
            var comp = this.tabs().getComponent(name + '-tab');
            this.tabs().setActiveItem(comp);
        }
          
        else {
            this.tabs().setActiveTab(name + '-tab');
        }
    },
    isModern: function () {
        return Ext.versions.modern == undefined ? false : true;
    },
    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onClickButton: function () {
        // Remove the localStorage key/value
        localStorage.removeItem('AHDLoggedIn');

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: 'login'
        });
    },
    onTranslate: function () {
        var translate = localStorage.getItem("lang");
        if (translate != "es") {
            localStorage.setItem("lang", "es");
        }
        else {
            localStorage.removeItem("lang")
        }
        window.location.reload();
    }
});