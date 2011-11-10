NotesApp.views.MyContactsListView = Ext.extend(Ext.Panel, {

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
                { xtype: 'spacer' },
                this.newButton
            ]
        });

        //this.dockedItems = [this.topToolbar];

        this.notesList = new Ext.List({
            store: this.notesStore,
            grouped: false,
            emptyText: '<div style="margin:5px;">No Results found.</div>',
            //onItemDisclosure: true,
            itemTpl: '<div class="list-item-title">{contactName}</div>' +
                '<div class="list-item-narrative">Emergency Contact: {emergencyContactName}</div>' +
                '<div class="checkitem {[values.done ? "done" : ""]}">&nbsp;</div>',
            listeners: {
                scope: this,
                itemtap: this.onItemtapAction
            }

        });

        /*        this.notesList.on('selectionchange', function (selectionModel, records) {
         this.onEditNote(records[0]);
         }, this),*/

        this.items = [this.notesList];

        NotesApp.views.NotesListView.superclass.initComponent.call(this);
    },

    onItemtapAction: function(list, index, item, e) {
        //this.listEdit();
        if (e.getTarget('.checkitem')) {
            Ext.dispatch({
                controller: NotesApp.controllers.notesController,
                action: 'setSelectForEmail',
                index: index
            });
        } else {
            Ext.dispatch({
                controller: NotesApp.controllers.notesController,
                action: 'editnote',
                index: index
            });
        }
    },


    listEdit:function() {
        var list = this.notesList;
        list.itemTpl = '<div class="list-item-title">{contactName}</div>' +
            '<div class="list-item-narrative">Emergency Contact: {emergencyContactName}</div>' +
            '<div class="checkitem {[values.done ? "done" : ""]}">&nbsp;</div>';
        list.initComponent();
        list.refresh();
    },

    onNewNote: function () {
        var list = this.notesList;
        list.itemTpl = '<div class="list-item-title">{contactName}</div>' +
            '<div class="list-item-narrative">Emergency Contact: {emergencyContactName}</div>' +
            '<div class="checkitem {[values.done ? "done" : ""]}">&nbsp;</div>';
        list.initComponent();
        list.refresh();
        //var list = Ext.getCmp('searchResultsList');


        /*        Ext.dispatch({
         controller: NotesApp.controllers.notesController,
         action: 'newnote'
         });*/
    },

    onSearchView: function () {
        /*        Ext.dispatch({
         controller: NotesApp.controllers.notesController,
         action: 'backToSearch'
         });*/
    },

    onEditNote: function (record) {

        /*        Ext.dispatch({
         controller: NotesApp.controllers.notesController,
         action: 'editnote',
         note: record
         });*/
    },

    refreshList: function () {
        this.notesList.refresh();
    }
});