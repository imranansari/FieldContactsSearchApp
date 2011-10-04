﻿Ext.regStore('NotesStore', {
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
        { id: 1, date: new Date(), contactName: 'Homer Simpson', emergencyContactName: 'Marge Simpson', contactWorkPhone:"336-286-9139" },
        { id: 2, date: new Date(), contactName: 'Marge Simpson', emergencyContactName: 'Homer Simpson', contactWorkPhone:"336-286-9139" },
        { id: 3, date: new Date(), contactName: 'Bart Simpson', emergencyContactName: 'Lisa Simpson', contactWorkPhone:"336-286-9139" },
        { id: 4, date: new Date(), contactName: 'Lisa Simpson', emergencyContactName: 'Bart Simpson', contactWorkPhone:"336-286-9139" }
    ]
});

NotesApp.stores.notesStore = Ext.StoreMgr.get('NotesStore');