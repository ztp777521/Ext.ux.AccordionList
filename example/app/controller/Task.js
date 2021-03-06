Ext.define('AccordionListExample.controller.Task', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
        },
        control: {
            'accordionlist[itemId=plain]': {
                leafitemtap: 'onLeafItemTap'
            },
            'accordionlist[itemId=decorate]': {
                leafitemtap: 'onLeafItemTap'
            },
             'accordionlist[itemId=nested]': {
                leafitemtap: 'onLeafItemTap'
            },
            'accordionlist[itemId=paging]': {
                leafitemtap: 'onLeafItemTap'
            }
        }
    },

    onLeafItemTap: function(list, index, target, record) {
        var value = record.get('text') || '';
        Ext.Msg.alert('You tapped leaf! : ' + value);
    }
});
