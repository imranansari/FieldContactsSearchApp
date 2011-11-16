Ext.regStore('EmailStore', {
    autoLoad : true,
    model: 'EmailModel',
    proxy: {
        type: 'localstorage',
        id: 'email-store'
    }
});

NotesApp.stores.emailStore = Ext.StoreMgr.get('EmailStore');