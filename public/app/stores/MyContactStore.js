Ext.regStore('MyContactStore', {
    autoLoad : true,
    model: 'MyContactModel',
    proxy: {
        type: 'localstorage',
        id: 'my-contact-store2'
    }
});

NotesApp.stores.myContactStore = Ext.StoreMgr.get('MyContactStore');