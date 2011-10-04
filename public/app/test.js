NotesApp.views.NoteDetailView = Ext.extend(Ext.form.FormPanel, {
            styleHtmlContent: true,
            tpl: [
                '<h2>{contactName}</h2>',

                '<div class="phone x-button">',
                    '<a href="tel:{phone}">{contactWorkPhone}</a>',
                '</div>'
            ],
            title: 'Info'
        });



// sencha example
timeline = new Ext.Component({
      title: 'Timeline',
      cls: 'timeline',
      scroll: 'vertical',
      tpl: [
          '<tpl for=".">',
              '<div class="tweet">',
                      '<div class="avatar"><img src="{profile_image_url}" /></div>',
                      '<div class="tweet-content">',
                          '<h2>{from_user}</h2>',
                          '<p>{text}</p>',
                      '</div>',
              '</div>',
          '</tpl>'
      ]
  }),

  NotesApp.views.NoteEditorView = Ext.extend(Ext.Panel, {



  dockedItems: [{
  xtype: 'toolbar',
  title: 'View post',
  items: [
      {
          text: 'Back',
          ui: 'back',
          listeners: {
              'tap': function () {
                  Ext.dispatch({
                      controller: mkapp.controllers.index,
                      action: 'index',
                      animation: {type:'slide', direction:'right'}
                  });
              }
          }
      },
      {xtype:'spacer'}
  ]
  }],
  styleHtmlContent:true,
  scroll: 'vertical',
  items: [
      timeline
  ],
  updateWithRecord: function(record) {
  Ext.each(this.items.items, function(item) {
      item.update(record.data);
  });
  var toolbar = this.getDockedItems()[0];
  toolbar.setTitle(record.get('channelName'));
  }
  });


