/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'UnAntaresHelpDesk.Application',

    name: 'UnAntaresHelpDesk',

    requires: [
        // This will automatically load all classes in the UnAntaresHelpDesk namespace
        // so that application classes do not need to require each other.
        'UnAntaresHelpDesk.*'
    ],

    // The name of the initial view to create.
    mainView: 'UnAntaresHelpDesk.view.main.Main'
});
