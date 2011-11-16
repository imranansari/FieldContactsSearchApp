NotesApp.views.MainView = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    //cardSwitchAnimation: 'slide',
    initComponent: function () {

        Ext.apply(NotesApp.views, {
            notesListView: new NotesApp.views.NotesListView({ notesStore: NotesApp.stores.notesStore }),
            myContactsListView: new NotesApp.views.MyContactsListView({ notesStore: NotesApp.stores.myContactStore }),
            noteEditorView: new NotesApp.views.NoteEditorView(),
            emailContactView: new NotesApp.views.EmailContactView(),
            noteDetailView: new NotesApp.views.NoteDetailView(),
            searchView: new NotesApp.views.SearchView()
        });

        this.items = [
            NotesApp.views.notesListView,
            NotesApp.views.noteEditorView,
            NotesApp.views.emailContactView,
            NotesApp.views.noteDetailView,
            NotesApp.views.searchView,
            NotesApp.views.myContactsListView
        ]

        NotesApp.views.MainView.superclass.initComponent.call(this);

        this.on('render', function () {
            //NotesApp.stores.notesStore.load();
        });
    }
});