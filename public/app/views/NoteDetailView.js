NotesApp.views.NoteDetailView = Ext.extend(Ext.Panel, {
    styleHtmlContent:true,
    cls:'detail',
    tpl:[
        /*             '<div class="info">',
         '{address1}<br/>',
         '<img src="{rating_img_url_small}"/>',
         '</div>',*/
        /*             '<div class="link x-button">',
         '<a href="{mobile_url}">Read more</a>',
         '</div>'*/
        '<h3>{contactName}</h3>',
        '<h4>Emergency</h4>' +
            '<div class="detailsViewField">' +
            '<span class="label">Contact Name: </span>' +
            '<span>{emergencyContactName}</span>' +
            '</div>' +
            '<div class="detailsViewField">' +
            '<span class="label">Phone: </span>' +
            '<a href="tel:{contactWorkPhone}">{contactWorkPhone}</a>' +
            '</div>',
        '<h4>Work</h4>' +
            '<div class="detailsViewField">' +
            '<span class="label">Phone: </span>' +
            '<a href="tel:{contactWorkPhone}">{contactWorkPhone}</a>' +
            '</div>',
            '<div class="detailsViewField">' +
            '<span class="label">Email: </span>' +
            '<a href="mailto::{contactWorkPhone}">homer@fox.com</a>' +
            '</div>',

        '<h4>Home</h4>' +
            '<div class="detailsViewField">' +
            '<span class="label">Cell Phone: </span>' +
            '<a href="tel:{contactWorkPhone}">{contactWorkPhone}</a>' +
            '</div>'

    ],
    title:'Info'
});


