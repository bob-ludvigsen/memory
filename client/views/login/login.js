/**
 * Created by Bob on 24-08-2015.
 */


Template.login.events({
    'submit form': function(event) {
        event.preventDefault();
        var emailVar = event.target.inputEmail.value;
        var passwordVar = event.target.inputPassword.value;
        Meteor.loginWithPassword(emailVar, passwordVar);
       // console.log("Form submitted. men Email: " + emailVar + 'og password : ' + passwordVar );
       // $("#loginmodal").modal("hide");
        Router.go('admin');
    },

    'click #recovery-form' : function(e, t) {
        e.preventDefault()

        // trim helper
        function trimInput(val) {
            return val.replace(/^\s*|\s*$/g, "");
        };

        function isNotEmpty(val){
            if (val != "") {
                return true;
            }
            else{
                return false;
            }
        }
        function isEmail(val){
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(val)) {
                //alert("goood email");
                return true;
            } else {
                //alert("Invalid email");
                return false;
            }


        }

        function isValidPassword(val){
            if (val != "") {
                return true;
            }
            else{
                return false;
            }
        }

        var email = trimInput(t.find('#recovery-email').value)

        if (isNotEmpty(email) && isEmail(email)) {
            Session.set('loading', true);
            Accounts.forgotPassword({email: email}, function(err){
                if (err){
               /* alert('fejjjlll');*/
                    Session.set('displayMessage', 'Password Reset Error &amp; Doh')
                }
                else {
                    /*alert('email sendt');*/
                    Session.set('displayMessage', 'Email Sent &amp; Please check your email.')
                }
                Session.set('loading', false);
            });
            $("#resetmodal").modal("hide");
        }

        return false;
    },

    'submit #new-password' : function(e, t) {
        e.preventDefault();
        var pw = t.find('#new-password-password').value;
        if (isNotEmpty(pw) && isValidPassword(pw)) {
            Session.set('loading', true);
            Accounts.resetPassword(Session.get('resetPassword'), pw, function(err){
                if (err){
                alert('fejl')
                    Session.set('displayMessage', 'Password Reset Error &amp; Sorry');
                }
                else {
                    Session.set('resetPassword', null);
                }
                Session.set('loading', false);
            });
        }
        return false;
    }

});
