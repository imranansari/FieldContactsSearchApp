NotesApp.views.EmailContactView = Ext.extend(Ext.form.FormPanel, {

    initComponent: function () {

        this.backButton = new Ext.Button({
            text: 'Back',
            ui: 'back',
            handler: this.backButtonTap,
            scope: this
        });

        this.saveButton = new Ext.Button({
            text: 'Save',
            ui: 'action',
            handler: this.saveButtonTap,
            scope: this
        });

        this.trashButton = new Ext.Button({
            iconCls: 'trash',
            iconMask: true,
            handler: this.trashButtonTap,
            scope: this
        });

        this.topToolbar = new Ext.Toolbar({
            title: 'Contact Details',
            items: [
                this.backButton/*,
                 { xtype: 'spacer' },
                 this.saveButton*/
            ]
        });

        this.bottomToolbar = new Ext.Toolbar({
            dock: 'bottom',
            items: [
                /*{ xtype: 'spacer' },
                 this.trashButton*/
            ]
        });

        //this.dockedItems = [this.topToolbar, this.bottomToolbar];

        NotesApp.views.EmailContactView.superclass.initComponent.call(this);
    },

    backButtonTap: function () {
        Ext.dispatch({
            controller: NotesApp.controllers.notesController,
            action: 'canceledit'
        });
    },

    saveButtonTap: function () {
        Ext.dispatch({
            controller: NotesApp.controllers.notesController,
            action: 'savenote'
        });
    },

    trashButtonTap: function () {
        Ext.dispatch({
            controller: NotesApp.controllers.notesController,
            action: 'deletenote'
        });
    },

    items: [
        {
            xtype: 'textfield',
            name: 'address',
            label: 'Mail To:',
            labelAlign: 'top',
            labelWidth: '100%',
            listeners: {
     /*           afterrender: function(ele) {
                    ele.fieldEl.dom.readOnly = true;
                }*/
            }
        },
        {
            xtype: 'textfield',
            name: 'emergencyContactName',
            label: 'Subject:',
            labelAlign: 'top',
            labelWidth: '100%',            listeners: {
 /*           afterrender: function(ele) {
                ele.fieldEl.dom.readOnly = true;
            }*/
        }

        },
        {
            xtype: 'textareafield',
            name: 'contactWorkPhone',
            label: 'Message:',
            labelAlign: 'top',
            labelWidth: '100%',            listeners: {
/*            afterrender: function(ele) {
                ele.fieldEl.dom.readOnly = true;
            }*/
        }
        }
    ]
});


