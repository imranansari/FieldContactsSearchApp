var App = new Ext.Application({
    name: 'NotesApp',
    useLoadMask: true,

    launch: function () {
/*        var now = new Date();
        var noteId = now.getTime();

        NotesApp.stores.notesStore.getProxy().clear();
        var note = Ext.ModelMgr.create({ id: noteId, date: now, title: 'test1', narrative: 'testing' },
            'NoteModel'
        );

        NotesApp.stores.notesStore.add(note);
        NotesApp.stores.notesStore.sync();*/
        //NotesApp.stores.notesStore.getProxy().clear();
        NotesApp.stores.notesStore.sync();


        Ext.dispatch({
            controller: NotesApp.controllers.notesController,
            action: 'index'
        });
    }
});