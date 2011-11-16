var App = new Ext.Application({
    name:'NotesApp',
    useLoadMask:true,

    launch:function() {
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

        var action = document.location.href.substr(document.location.href.lastIndexOf('/') + 1);


        if (action == 'mycontacts') {
            Ext.dispatch({
                controller:NotesApp.controllers.notesController,
                action:'myContactsListView'
            });

        } else if (action == 'emailContact') {
            Ext.dispatch({
                controller:NotesApp.controllers.notesController,
                action:'emailContact'
            });
        } else {

            Ext.dispatch({
                controller:NotesApp.controllers.notesController,
                action:'index'
            });
        }

    }
});

var baseURL = document.location.href;

window.onpopstate = function(event) {
    var action = document.location.href.substr(document.location.href.lastIndexOf('/') + 1);
    Android.setCurrentView(action);

    if (action == 'searchResults') {
        console.log('goto searchResults')
        NotesApp.views.mainView.setActiveItem(
            NotesApp.views.notesListView,
            { type:'slide', direction:'right' }
        );
    }
    //if (document.location.href.substr(baseURL.length) == 'search') {
    if (action == 'search') {
        NotesApp.views.mainView.setActiveItem(
            //NotesApp.views.notesListView
            NotesApp.views.searchView,
            { type:'slide', direction:'right' }
        );
    }

    if (action == 'viewDetails') {
        NotesApp.views.mainView.setActiveItem(
            NotesApp.views.noteDetailView,
            { type:'slide', direction:'right' }
        );
    }

    if (action == 'mycontacts') {
        NotesApp.views.mainView.setActiveItem(
            NotesApp.views.myContactsListView,
            { type:'slide', direction:'right' }
        );
    }
};

/*
 window.onload = function() {
 Ext.dispatch({
 controller: NotesApp.controllers.notesController,
 action: 'editList'
 });
 };*/

/*window.onload = function() {
 alert('helooo1');
 };*/


function addContact() {
    Ext.dispatch({
        controller:NotesApp.controllers.notesController,
        action:'addContact'
    });
}

function emailContact() {
    Ext.dispatch({
        controller:NotesApp.controllers.notesController,
        action:'emailContact'
    });
}

function setSelectedContactEmail() {
    alert('setSelectedContactEmail 1');
    var controller = NotesApp.controllers.notesController;
    controller.setSelectedContactEmail();

}

function reloadMyContactStore() {
    Ext.dispatch({
        controller:NotesApp.controllers.notesController,
        action:'reloadMyContactStore'
    });
}

/*Android = {
    setCurrentView:function() {

    }
}*/
