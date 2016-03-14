/**
 * Created by Bob on 20-08-2015.
 */

var instance;
Template.searchTactic.onCreated(function () {



    instance = EasySearch.getComponentInstance(
        {  index: 'taktik'}
    );

   instance.on('searchingDone', function (searchingIsDone) {
        //return instance.get('currentValue');
        //searchingIsDone && console.log('I am done!' + instance.get('total'));
    });

        instance.on('currentValue', function (val) {
        //console.log('The user searches for ' + val);
    });

});

Template.searchTactic.helpers({

    total: function () {
        var total = 0;
        total = instance.get('total');
        return  total;
    }

})

Template.searchTactic.events(

    {
        // Fires when any element with the 'accept' class is clicked
        'click .btn-danger': function (event) {
            $('.empty').val('');
            instance.clear();

        }


    }

)

