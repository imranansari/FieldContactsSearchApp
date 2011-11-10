NotesApp.views.NoteDetailView = Ext.extend(Ext.Panel ,{
         styleHtmlContent: true,
         cls: 'detail',
         tpl: [
             '<h2>{contactName}</h2>',
/*             '<div class="info">',
                 '{address1}<br/>',
                 '<img src="{rating_img_url_small}"/>',
             '</div>',*/
             '<div class="phone x-button">',
                 '<a href="tel:{contactWorkPhone}">{contactWorkPhone}</a>',
             '</div>'
/*             '<div class="link x-button">',
                 '<a href="{mobile_url}">Read more</a>',
             '</div>'*/
         ],
         title: 'Info'
     });


