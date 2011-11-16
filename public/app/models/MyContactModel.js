Ext.regModel('MyContactModel', {
    idProperty:'id',
    fields:[
        { name:'id', type:'int' },
        { name:'date', type:'date', dateFormat:'c' },
        { name:'contactName', type:'string' },
        { name:'contactWorkPhone', type:'string' },
        { name:'contactCellPhone', type:'string' },
        { name:'contactHomePhone', type:'string' },
        { name:'contactWorkEmail', type:'string' },
        { name:'contactHomeEmail', type:'string' },
        { name:'emergencyContactName', type:'string' },
        { name:'emergencyContactPhone', type:'string' },
        { name:'emergencyContactEmail', type:'string' },

        {
            name:'done',
            type:'boolean',
            defaultValue:false
        }

    ]
});

