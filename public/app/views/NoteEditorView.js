﻿NotesApp.views.NoteEditorView = Ext.extend(Ext.form.FormPanel, {

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

        NotesApp.views.NoteEditorView.superclass.initComponent.call(this);
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
            name: 'contactName',
            label: 'Contact Name',
            labelAlign: 'top',
            labelWidth: '100%',
            listeners: {
                afterrender: function(ele) {
                    ele.fieldEl.dom.readOnly = true;
                }
            }
        },
        {
            xtype: 'textfield',
            name: 'emergencyContactName',
            label: 'Emergency Contact Name',
            labelAlign: 'top',
            labelWidth: '100%',            listeners: {
            afterrender: function(ele) {
                ele.fieldEl.dom.readOnly = true;
            }
        }

        },
        {
            xtype: 'textfield',
            name: 'contactWorkPhone',
            label: 'Contact Work Phone',
            labelAlign: 'top',
            labelWidth: '100%',            listeners: {
            afterrender: function(ele) {
                ele.fieldEl.dom.readOnly = true;
            }
        }
        }
    ]
});


