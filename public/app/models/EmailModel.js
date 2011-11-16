Ext.regModel('EmailModel', {
    idProperty:'id',
    fields:[
        { name:'id', type:'int' },
        /*{ name:'contactName', type:'string' },
        { name:'contactWorkEmail', type:'string' },
        { name:'contactHomeEmail', type:'string' },
        { name:'emergencyContactName', type:'string' },
        { name:'emergencyContactEmail', type:'string' },*/

        { name:'address', type:'auto' },
        { name:'subject', type:'string' },
        { name:'message', type:'string' }
    ]
});

