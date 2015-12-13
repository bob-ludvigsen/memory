if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault('counter', 0);

    Template.hello.helpers({
        counter: function () {
            return Session.get('counter');
        },
        grid: function () {
            var inputs = '';
            for (var i = 0; i < 10; i++) {

                for (var x = 0; x < 10; x++) {
                    inputs += x;
                    console.log(x);

                }
            }
            return inputs;
        }
    });

    Template.hello.events({
        'click button': function () {
            // increment the counter when button is clicked
            Session.set('counter', Session.get('counter') + 1);
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
