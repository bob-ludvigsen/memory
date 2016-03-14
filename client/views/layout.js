/**
 * Created by Bob on 24-06-2015.
 */

Tracker.autorun(function (c) {
    if (Meteor.status().connected) {
        //Session.set("collectionready", true);
       //alert(Meteor.status().connected);
    }


});

Template.layout.helpers({
    groundReady: function() {
        //console.log(Ground.ready())
        return Ground.ready();
    }

})

Template.layout.onRendered(function () {


   /* var sampleWords;

    if (eng.find().count() === 0) {

        Meteor.call('engdata',function(err,response){
           // console.log(response);



        // create sample polls
         sampleWords = response;

        //loop over each sample poll and insert into database
         _.each(sampleWords, function(words) {
            eng.insert(words);
        });
        });
    }
*/
});
Template.layout.events({
    'click .logout': function (event) {
        event.preventDefault();
        Meteor.logout();
        console.log('logger ud.....')
        Router.go('/');
    }
})
