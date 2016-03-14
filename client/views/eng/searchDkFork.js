/**
 * Created by Bob on 21-08-2015.
 */


var instance;
Template.searchDkFork.onCreated(function () {

    instance = EasySearch.getComponentInstance(
        {  index: 'daFork'}
    );

    instance.on('searchingDone', function (searchingIsDone) {
        //return instance.get('currentValue');
       // searchingIsDone && console.log('I am done!' + instance.get('total'));
    });

    instance.on('currentValue', function (val) {
       // console.log('The user searches for ' + val);
    });

});

Template.searchDkFork.helpers({

    total: function () {
        var total = 0;
        total = instance.get('total');
        return  total;
    }

})


Template.searchDkFork.events(

    {
        // Fires when any element with the 'accept' class is clicked
        'click .btn-danger': function (event) {
            $('.empty').val('');
            instance.clear();

        }


    }

)

