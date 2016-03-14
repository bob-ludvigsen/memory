/**
 * Created by pfu on 29/05/14.
 */
Router.configure({
    layoutTemplate: 'layout'
});

//Router.onRun(function(){setActiveLinks();});


Router.map(function() {

    Router.route('/', function () {
        this.render('home');
    });

    Router.route('/search', function () {
        this.render('search');
    })
    Router.route('/searchTactic', function () {
        this.render('searchTactic');
    })
    Router.route('/searchfr', function () {
        this.render('searchfr');
    })
    Router.route('/contact', function () {
        this.render('contact');
    });

    Router.route('/searchEng', function () {
        this.render('searchEng');
    });
    Router.route('/descriptioneng', function () {
        this.render('descreng');
    });
    Router.route('/descriptionfr', function () {
        this.render('descrfr');
    });
    Router.route('/descriptiontac', function () {
        this.render('descrtac');
    });


    Router.route('/login', function () {
        this.render('login');
    });

    Router.route('/ForgotPassword', function () {
        this.render('ForgotPassword');
    });
    Router.route('/ResetPassword', function () {
        this.render('ResetPassword');
    });

    Router.route('/searchEngDa', function () {
        this.render('searchEngDa');
    });

    Router.route('/searchDkFork', function () {
        this.render('searchDkFork');
    });
    Router.route('/searchEngFork', function () {
        this.render('searchEngFork');
    });


    this.route('admin', {
        path:'/admin',
        layoutTemplate: 'admin_layout',
        template: 'adminTemplate',
        onBeforeAction: function() {
            if (Meteor.loggingIn()) {
                this.render(this.loadingTemplate);
            } else if(!Roles.userIsInRole(Meteor.user(), ["admin"])) {
                //console.log('redirecting');
                this.redirect('/');
            }
            else {
                this.next();
            }
        }
    });



    this.route('list_questions', {
        path:'/list_questions',
        layoutTemplate: 'admin_layout',
        template: 'listquestions',
        onBeforeAction: function() {
            if (Meteor.loggingIn()) {
                this.render(this.loadingTemplate);
            } else if(!Roles.userIsInRole(Meteor.user(), ['admin'])) {
                //console.log('redirecting');
                this.redirect('/');
            }
            else {
                this.next();
            }
        }
    });

    Router.route('/editquestion/:_id/', {
        //path: '/edit_questions/:_id',
        //path:'/list_questions/:_id',
        name: 'editquestion',
        layoutTemplate: 'admin_layout',

        waitOn: function() {

            return Meteor.subscribe('quizzes');
        },

        data: function() {
            Session.set('qId', this.params._id);

            //Posts.findOne(this.params._id)
            //return Quizzes.findOne(this.params._id);
            },
        onBeforeAction: function() {
            if (Meteor.loggingIn()) {
                this.render(this.loadingTemplate);
            } else if(!Roles.userIsInRole(Meteor.user(), ['admin'])) {
                //console.log('redirecting');
                this.redirect('/');
            }
            else {
                this.next();
            }
        }

    });


    this.route('create_question', {
        path:'/create_question',
        layoutTemplate: 'admin_layout',
        template: 'createquestion',
        onBeforeAction: function() {
            if (Meteor.loggingIn()) {
                this.render(this.loadingTemplate);
            } else if(!Roles.userIsInRole(Meteor.user(), ['admin'])) {
                //console.log('redirecting');
                this.redirect('/');
            }
            else {
                this.next();
            }
        }
    });


});


