NotesApp.views.NotesListView = Ext.extend(Ext.Panel, {

    notesStore: Ext.emptyFn,
    notesList: Ext.emptyFn,

    layout: 'fit',

    initComponent: function () {

        this.newButton = new Ext.Button({
            text: 'New',
            ui: 'action',
            handler: this.onNewNote,
            scope: this
        });

        this.searchViewButton = new Ext.Button({
            text: 'Back',
            ui: 'back',
            handler: this.onSearchView,
            scope: this
        });

        this.topToolbar = new Ext.Toolbar({
            title: 'Contacts List',

            items: [
                this.searchViewButton,
                /*{ xtype: 'spacer' },
                this.newButton*/
            ]
        });

        this.dockedItems = [this.topToolbar];

        this.notesList = new Ext.List({
            store: this.notesStore,
            grouped: false,
            emptyText: '<div style="margin:5px;">No Results found.</div>',
            //onItemDisclosure: true,
            itemTpl: '<div class="list-item-title">{contactName}</div>' +
                '<div class="list-item-narrative">Emergency Contact: {emergencyContactName}</div>'

        });

        this.notesList.on('selectionchange', function (selectionModel, records) {
            this.onEditNote(records[0]);
        }, this),

            this.items = [this.notesList];

        NotesApp.views.NotesListView.superclass.initComponent.call(this);
    },

    onNewNote: function () {
        Ext.dispatch({
            controller: NotesApp.controllers.notesController,
            action: 'newnote'
        });
    },

    onSearchView: function () {
        Ext.dispatch({
            controller: NotesApp.controllers.notesController,
            action: 'backToSearch'
        });
    },

    onEditNote: function (record) {
        Ext.dispatch({
            controller: NotesApp.controllers.notesController,
            action: 'editnote',
            note: record
        });
    },

    refreshList: function () {
        this.notesList.refresh();
    }
});