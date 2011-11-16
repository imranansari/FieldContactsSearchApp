Ext.regController('NotesController', {

    'index':function(options) {

        if (!NotesApp.views.mainView) {
            NotesApp.views.mainView = new NotesApp.views.MainView();
        }

        window.history.pushState('data', 'search', 'search');
        Android.setCurrentView('search');

        NotesApp.views.mainView.setActiveItem(
            //NotesApp.views.notesListView
            NotesApp.views.searchView
        );
    },

    'myContactsListView':function(options) {

        if (!NotesApp.views.mainView) {
            NotesApp.views.mainView = new NotesApp.views.MainView();
        }

        /*		var myContactStore = Ext.getStore('MyContactStore');

         myContactStore.add(myContactModel);
         myContactStore.sync();*/


        window.history.pushState('data', 'mycontacts', 'mycontacts');
        Android.setCurrentView('mycontacts');

        NotesApp.views.mainView.setActiveItem(
            //NotesApp.views.notesListView
            NotesApp.views.myContactsListView
        );
    },


    'backToSearch':function(options) {

        if (!NotesApp.views.mainView) {
            NotesApp.views.mainView = new NotesApp.views.MainView();
        }

        NotesApp.views.mainView.setActiveItem(
            //NotesApp.views.notesListView
            NotesApp.views.searchView,
            { type:'slide', direction:'right' }
        );
    },

    'newnote':function(options) {

        var now = new Date();
        var noteId = now.getTime();
        var note = Ext.ModelMgr.create({ id:noteId, date:now, title:'', narrative:'' },
            'NoteModel'
        );

        NotesApp.views.noteEditorView.load(note);
        NotesApp.views.mainView.setActiveItem(
            NotesApp.views.noteEditorView,
            { type:'slide', direction:'left' }
        );
    },

    'editnote':function(options) {

        window.history.pushState('data', 'viewDetails', 'viewDetails');
        Android.setCurrentView('viewDetails');


        var store = Ext.getStore('NotesStore');
        var note = store.getAt(options.index);

        NotesApp.views.noteDetailView.update(note.data);
        //NotesApp.views.noteEditorView.update(record.note.data);
        NotesApp.views.mainView.setActiveItem(
            NotesApp.views.noteDetailView,
            { type:'slide', direction:'left' }
        );
    },

    'setSelectForEmail':function(options) {
        var store = Ext.getStore('NotesStore');
        var model = store.getAt(options.index);

        model.set('done', model.get('done') ? false : true);
        /*var myContactModel = model.copy();

         var myContactStore = Ext.getStore('MyContactStore');

         myContactStore.add(myContactModel);
         myContactStore.sync();*/

    },

    'savenote':function(options) {

        var currentNote = NotesApp.views.noteEditorView.getRecord();

        NotesApp.views.noteEditorView.updateRecord(currentNote);

        var errors = currentNote.validate();
        if (!errors.isValid()) {
            Ext.Msg.alert('Wait!', errors.getByField('title')[0].message, Ext.emptyFn);
            return;
        }

        if (null == NotesApp.stores.notesStore.findRecord('id', currentNote.data.id)) {
            NotesApp.stores.notesStore.add(currentNote);
        }

        NotesApp.stores.notesStore.sync();

        NotesApp.stores.notesStore.sort([
            { property:'date', direction:'DESC'}
        ]);

        NotesApp.views.notesListView.refreshList();

        NotesApp.views.mainView.setActiveItem(
            NotesApp.views.notesListView,
            { type:'slide', direction:'right' }
        );
    },

    'deletenote':function(options) {

        var currentNote = NotesApp.views.noteEditorView.getRecord();

        if (NotesApp.stores.notesStore.findRecord('id', currentNote.data.id)) {
            NotesApp.stores.notesStore.remove(currentNote);
        }

        NotesApp.stores.notesStore.sync();
        NotesApp.views.notesListView.refreshList();

        NotesApp.views.mainView.setActiveItem(
            NotesApp.views.notesListView,
            { type:'slide', direction:'right' }
        );
    },

    'canceledit':function(options) {

        NotesApp.views.mainView.setActiveItem(
            NotesApp.views.notesListView,
            { type:'slide', direction:'right' }
        );
    },

    'search':function(options) {

        // alert('a');
        NotesApp.stores.notesStore.load();

        window.history.pushState('data', 'searchResults', 'searchResults');
        Android.setCurrentView('searchResults');

        NotesApp.views.mainView.setActiveItem(
            NotesApp.views.notesListView,
            { type:'slide', direction:'left' }
        );
    },

    'addContact':function() {
        //NotesApp.views.notesListView.onNewNote();
        //alert('add contact called');
        var store = Ext.getStore('NotesStore');


        store.suspendEvents(false);

        store.filter('done', 'true');
        var myData = store.data;


        console.log(myData);
        var myContactStore = Ext.getStore('MyContactStore');

        store.data.each(function() {
            console.log(this);
            myContactStore.add(this);
            myContactStore.sync();
        });

        store.clearFilter();

        store.resumeEvents();
    },

    'setSelectedContactEmail':function() {
        var emailAddress = new Array();
        var store = Ext.getStore('NotesStore');

        store.suspendEvents(false);

        store.filter('done', 'true');

        store.data.each(function() {
            console.log(this);
            emailAddress.push(this.data.contactWorkEmail);
        });

        store.clearFilter();
        store.resumeEvents();

        Android.setEmailAddress(emailAddress.join(','));
    },

    'emailContact':function() {
        window.history.pushState('data', 'emailContact', 'emailContact');
        Android.setCurrentView('emailContact');

        if (!NotesApp.views.mainView) {
            NotesApp.views.mainView = new NotesApp.views.MainView();
        }

        var emailAddress = this.getSelectedContactEmail();
        var email = Ext.ModelMgr.create({ id:'1', address: emailAddress},
            'EmailModel'
        );

        NotesApp.views.emailContactView.load(email);
        NotesApp.views.mainView.setActiveItem(
            NotesApp.views.emailContactView
        );
    },

    'reloadMyContactStore':function() {
        Ext.getStore('MyContactStore').load();
    }
});

NotesApp.controllers.notesController = Ext.ControllerManager.get('NotesController');
