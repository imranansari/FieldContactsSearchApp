Ext.regStore('NotesStore', {
    model: 'NoteModel',
    autoLoad : true,
    sorters: [
        {
            property: 'date',
            direction: 'DESC'
        }
    ],
    proxy: {
        type: 'localstorage',
        id: 'notes-app-store1'
    },
/*    getGroupString: function (record) {
        if (record && record.data.date) {
            return record.get('date').toDateString();
        } else {
            return '';
        }
    },*/
    data: [
        { id: 1, date: new Date(), title: 'Test Note1', narrative: 'This is simply a test note' },
        { id: 2, date: new Date(), title: 'Test Note2', narrative: 'This is simply a test note' },
        { id: 3, date: new Date(), title: 'Test Note3', narrative: 'This is simply a test note' },
        { id: 4, date: new Date(), title: 'Test Note4', narrative: 'This is simply a test note' }
    ]
});

NotesApp.stores.notesStore = Ext.StoreMgr.get('NotesStore');