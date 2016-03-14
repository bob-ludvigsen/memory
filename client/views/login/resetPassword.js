/**
 * Created by Bob on 24-08-2015.
 */
Template.ForgotPassword.events({
    'submit #forgotPasswordForm': function(e, t) {
        e.preventDefault();

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


        var forgotPasswordForm = $(e.currentTarget),
            email = trimInput(forgotPasswordForm.find('#forgotPasswordEmail').val().toLowerCase());

        if (isNotEmpty(email) && isEmail(email)) {

            Accounts.forgotPassword({email: email}, function(err) {
                if (err) {
                    if (err.message === 'User not found [403]') {
                        console.log('This email does not exist.');
                    } else {
                        console.log('We are sorry but something went wrong.');
                    }
                } else {
                    console.log('Email Sent. Check your mailbox.');
                }
            });

        }
        return false;
    },
});

if (Accounts._resetPasswordToken) {
    Session.set('resetPassword', Accounts._resetPasswordToken);
}

Template.ResetPassword.helpers({
    resetPassword: function(){
        return Session.get('resetPassword');
    }
});

Template.ResetPassword.events({
    'submit #resetPasswordForm': function(e, t) {
        e.preventDefault();

        isNotEmpty = function(value) {
            if (value && value !== ''){
                return true;
            }
            console.log('Please fill in all required fields.');
            return false;
        };

        isValidPassword = function(password) {
            if (password.length < 6) {
                console.log('Your password should be 6 characters or longer.');
                return false;
            }
            return true;
        };

        areValidPasswords = function(password, confirm) {
            if (!isValidPassword(password)) {
                return false;
            }
            if (password !== confirm) {
                console.log('Your two passwords are not equivalent.');
                return false;
            }
            return true;
        };


        var resetPasswordForm = $(e.currentTarget),
            password = resetPasswordForm.find('#resetPasswordPassword').val(),
            passwordConfirm = resetPasswordForm.find('#resetPasswordPasswordConfirm').val();

        if (isNotEmpty(password) && areValidPasswords(password, passwordConfirm)) {
            Accounts.resetPassword(Session.get('resetPassword'), password, function(err) {
                if (err) {
                    console.log('We are sorry but something went wrong.');
                } else {
                    console.log('Your password has been changed. Welcome back!');
                    Session.set('resetPassword', null);
                }
            });
        }
        return false;
    }
});