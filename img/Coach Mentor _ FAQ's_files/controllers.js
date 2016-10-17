var globalfunction = {};
angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ui.select', 'ngAnimate', 'toastr', 'ngSanitize', 'angular-flexslider', 'ui.tinymce', 'imageupload', 'ngMap', 'toggle-switch', 'cfp.hotkeys', 'ui.sortable'])


.controller('headerctrl', function($scope, TemplateService, $uibModal) {
    $scope.template = TemplateService;

    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    globalfunction.confDel = function(callback) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/modal/conf-delete.html',
            size: 'sm',
            scope: $scope
        });
        $scope.close = function(value) {
            callback(value);
            modalInstance.close("cancel");
        };
    };
})

.controller('LoginCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    $scope.template = TemplateService.changecontent("login");
    TemplateService.title = "Login";
    $scope.template.header = 'views/header2.html';

    $scope.changeBG = true;

    $scope.formData = {};
    $scope.loginType = 'coach';
})

.controller('ForgotPasswordCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    $scope.template = TemplateService.changecontent("forgot-password");
    TemplateService.title = "Login";
    $scope.template.header = 'views/header2.html';
})

.controller('RegisterCoachCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    $scope.template = TemplateService.changecontent("coach/register-coach");
    TemplateService.title = "Coach Registration";
    $scope.template.header = 'views/header2.html';
    $scope.formData = {};
    $scope.coachingFocus = [
        'Sprinting', 'Middle Distance', 'Endurance', 'Throws', 'Jumps', 'Hurdles', 'Hill/Fell Running', 'Cross Country'
    ];
    $scope.specialisations = [
        'Coaching athletes with a disability', 'Coaching female athletes', 'Eating disorders', 'First aid', 'Long-term athlete development', 'Mentored practice', 'Strength and conditioning', 'Fitness in Running and Walking', 'Children in Athletics'
    ];
})

.controller('CoachProfileCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coach/coach-profile");
    $scope.menutitle = NavigationService.makeActiveCoach("Profile");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();
    $scope.coachingFocus = [
        'Sprinting', 'Middle Distance', 'Endurance', 'Throws', 'Jumps', 'Hurdles', 'Hill/Fell Running', 'Cross Country'
    ];
    $scope.specialisations = [
        'Coaching athletes with a disability', 'Coaching female athletes', 'Eating disorders', 'First aid', 'Long-term athlete development', 'Mentored practice', 'Strength and conditioning', 'Fitness in Running and Walking', 'Children in Athletics'
    ];
})

.controller('CoachProfileEditCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coach/coach-profile-edit");
    $scope.menutitle = NavigationService.makeActiveCoach("Profile");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();
    $scope.formData = {
        name: 'Sachin',
        surname: 'Tendulkar',
        image: 'http://2.bp.blogspot.com/-TgdKBlUGk90/T0PhPlFOf8I/AAAAAAAAAVc/jijEQ8u1uUg/s1600/387430_257363124319593_257347670987805_670782_1318978483_n.jpg',
        yearsCoaching: 2,
        email: 'sachin@gmail.com',
        gender: 'Male',
        contact: '+919098765324',
        dob: new Date(),
        limit: "50",
        price: 50,
        country: 'UK',
        credentials: 'Level 4',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod, turpis at auctor interdum, enim neque placerat diam, ac faucibus sem elit in sapien. Vivamus sodales et libero ac consectetur. Curabitur hendrerit lacus nisi, eget euismod felis gravida vitae. Nullam faucibus maximus eros, non facilisis magna tincidunt quis. Ut suscipit fringilla quam eu scelerisque. Proin orci lacus, condimentum eget urna at, aliquam pellentesque mauris. Aenean rutrum diam tortor, sed finibus nibh condimentum ac. Sed et blandit arcu.',
        coachingFocus: ['Sprinting', 'Hurdles'],
        specialisations: ['Children in Athletics', 'First aid']
    };
    $scope.coachingFocus = [
        'Sprinting', 'Middle Distance', 'Endurance', 'Throws', 'Jumps', 'Hurdles', 'Hill/Fell Running', 'Cross Country'
    ];
    $scope.specialisations = [
        'Coaching athletes with a disability', 'Coaching female athletes', 'Eating disorders', 'First aid', 'Long-term athlete development', 'Mentored practice', 'Strength and conditioning', 'Fitness in Running and Walking', 'Children in Athletics'
    ];

    $scope.submit = function(data) {
        console.log(data);
        $state.go('app.profile');
    };
})

.controller('CoachAthletesCoachedCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coach/coach-athletes-coached");
    $scope.menutitle = NavigationService.makeActiveCoach("Athletes Coached");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();

    $scope.athletesRequest = function() {
        var modalInstance = $uibModal.open({
            scope: $scope,
            templateUrl: 'views/modal/modal-athletes-coached.html',
            size: 'lg'
        });
    };
})

.controller('CoachAthletesCoachedViewCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coach/coach-athletes-coachedview");
    $scope.menutitle = NavigationService.makeActiveCoach("Athletes Coached");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();
    $scope.athleteCoaching = {
        name: 'Matt',
        surname: 'Smith',
        image: 'img/img-placeholder.png',
        acceptedDate: '13 May, 2016',
        renewalDate: '12 June, 2016',
        subscriptionType: 'Monthly',
        location: 'UK',
        age: '22',
        sports: [
            'Cycling',
            'Running'
        ],
        events: [
            'UK Marathon 2016',
            'Triathlon 2016'
        ]
    };

    $scope.openUnsubscribe = function() {
        var modalInstance = $uibModal.open({
            scope: $scope,
            templateUrl: 'views/modal/modal-unsubscribe.html'
        });
    };
})


.controller('CoachCompetitionCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coach/coach-competition");
    $scope.menutitle = NavigationService.makeActiveCoach("Competition");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();

    $scope.addCompetition = function() {
        var modalInstance = $uibModal.open({
            scope: $scope,
            templateUrl: 'views/modal/modal-competition-add.html'
        });
    };

    $scope.editCompetition = function() {
        var modalInstance = $uibModal.open({
            scope: $scope,
            templateUrl: 'views/modal/modal-competition-edit.html'
        });
    };

    $scope.assignCompetition = function() {
        var modalInstance = $uibModal.open({
            scope: $scope,
            templateUrl: 'views/modal/modal-competition-assign.html'
        });
    };

    $scope.scoreCompetition = function() {
        var modalInstance = $uibModal.open({
            scope: $scope,
            templateUrl: 'views/modal/modal-competition-score.html',
            size: 'lg'
        });
    };
})


.controller('CoachCompetitionCreateCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coach/coach-competition-create");
    $scope.menutitle = NavigationService.makeActiveCoach("Competition");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();
    $scope.title = "Add Competition";
    $scope.players = [{
        name: 'Ambrose Dzosa',
        image: 'img/img-placeholder.png'
    }, {
        name: 'Johannah Deakin',
        image: 'img/img-placeholder.png'
    }, {
        name: 'Jack White',
        image: 'img/img-placeholder.png'
    }, {
        name: 'Matt Smith',
        image: 'img/img-placeholder.png'
    }, {
        name: 'May Smith',
        image: 'img/img-placeholder.png'
    }]
})

.controller('CoachCompetitionEditCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coach/coach-competition-create");
    $scope.menutitle = NavigationService.makeActiveCoach("Competition");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();
    $scope.title = "Edit Competition";
    $scope.players = [{
        name: 'Ambrose Dzosa',
        image: 'img/img-placeholder.png'
    }, {
        name: 'Johannah Deakin',
        image: 'img/img-placeholder.png'
    }, {
        name: 'Jack White',
        image: 'img/img-placeholder.png'
    }, {
        name: 'Matt Smith',
        image: 'img/img-placeholder.png'
    }, {
        name: 'May Smith',
        image: 'img/img-placeholder.png'
    }]
})

.controller('CoachTestingCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal, $stateParams, toastr, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coach/coach-testing");
    $scope.menutitle = NavigationService.makeActiveCoach("Testing");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();
    $scope.data = [{
        name: '800M Running',
        startDate: '14 January, 2017',
        endDate: '15 January, 2017',
        details: '',
        assignedAthletes: [{
            name: 'Van Gough',
            img: 'img/img-placeholder.png'
        }],
    }, {
        name: '5KM Cycling',
        startDate: '14 January, 2017',
        endDate: '15 January, 2017',
        details: '',
        assignedAthletes: [{
            name: 'Van Gough',
            img: 'img/img-placeholder.png'
        }],
    }];

})

.controller('CoachTestingCreateCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal, $stateParams, toastr, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coach/coach-testing-create");
    $scope.menutitle = NavigationService.makeActiveCoach("Testing");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();
    $scope.title = "Create Test";
    $scope.testStep = 'test';
    $scope.players = [{
        name: 'Ambrose Dzosa',
        image: 'img/img-placeholder.png'
    }, {
        name: 'Johannah Deakin',
        image: 'img/img-placeholder.png'
    }, {
        name: 'Jack White',
        image: 'img/img-placeholder.png'
    }, {
        name: 'Matt Smith',
        image: 'img/img-placeholder.png'
    }, {
        name: 'May Smith',
        image: 'img/img-placeholder.png'
    }];
})

.controller('CoachTestingEditCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal, $stateParams, toastr, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coach/coach-testing-create");
    $scope.menutitle = NavigationService.makeActiveCoach("Testing");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();
    $scope.title = "Edit Test";
    $scope.formData = {
        name: '300M Running',
        startDate: new Date("January 14, 2017 11:13:00"),
        endDate: new Date("January 15, 2017 11:13:00"),
        details: '300M Running on Ronal Ground',
        players: [{
            name: 'Van Gough',
            img: 'img/img-placeholder.png'
        }, {
            name: 'Samuel Trump',
            img: 'img/img-placeholder.png'
        }],
    };

    $scope.testStep = 'test';
    $scope.players = [{
        name: 'Ambrose Dzosa',
        image: 'img/img-placeholder.png'
    }, {
        name: 'Johannah Deakin',
        image: 'img/img-placeholder.png'
    }, {
        name: 'Jack White',
        image: 'img/img-placeholder.png'
    }, {
        name: 'Matt Smith',
        image: 'img/img-placeholder.png'
    }, {
        name: 'May Smith',
        image: 'img/img-placeholder.png'
    }];

})

.controller('CoachBlogCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal, $stateParams, toastr, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coach/coach-blog");
    $scope.menutitle = NavigationService.makeActiveCoach("Blog");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();
    $scope.data = [{
        title: 'The Strongest Woman I’ve Ever Known Ever Known',
        img: 'img/ground.png',
        date: '4th October 2015',
        ratingup: '4.5',
        ratingdown: '1.5',
    }, {
        title: 'Dhoni and Kohli Together',
        img: 'img/kohlidhoni.jpg',
        date: '3rd November 2015',
        ratingup: '3.5',
        ratingdown: '2.5',
    }, {
        title: 'What You Dont Know About: Being a GM',
        img: 'img/i.jpeg',
        date: '3rd December 2015',
        ratingup: '2.5',
        ratingdown: '2.5',
    }];

})

.controller('CoachBlogCreateCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal, $stateParams, toastr, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coach/coach-blog-create");
    $scope.menutitle = NavigationService.makeActiveCoach("Blog");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();
    $scope.title = "Create Blog";
    $scope.players = [{
        name: 'Ambrose Dzosa',
        image: 'img/img-placeholder.png'
    }, {
        name: 'Johannah Deakin',
        image: 'img/img-placeholder.png'
    }, {
        name: 'Jack White',
        image: 'img/img-placeholder.png'
    }, {
        name: 'Matt Smith',
        image: 'img/img-placeholder.png'
    }, {
        name: 'May Smith',
        image: 'img/img-placeholder.png'
    }];

})

.controller('CoachBlogEditCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal, $stateParams, toastr, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coach/coach-blog-create");
    $scope.menutitle = NavigationService.makeActiveCoach("Blog");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();
    $scope.title = "Edit Blog";
    $scope.formData = {
        name: 'Sachin',
        content: " <p>Knowledge is power, and we were arming ourselves for the toughest fight of our lives.</p><p>See, I come from a long line of warriors, as my mom used to say. When cancer struck my aunties we didn’t have time to grieve because we were too busy fighting the disease.</p><p>Each time the disease struck, we thought, This is gonna be the one that we beat, this is gonna be the one that we beat, this is gonna be the one that we beat. We knew the protocols — doctors, chemo, estrogen shot, whatever was needed to be healthy and fighting. We were always optimistic.</p><p>Each battle lasted a little longer than the one before, but we never won.</p><p>In 2004 it was my mom’s turn to fight. Only she didn’t tell me.</p><p>My mom was diagnosed at the beginning of the year, but she didn’t tell me about it until the summer, after my junior season at Memphis.</p> <p>I was pissed. I felt like she was going through this battle herself and had robbed us of the opportunity to be her support system. When I asked her why she waited to tell us she simply said, “Hey, you were busy. I was busy.”</p><p>That was how strong my mom was. She didn’t want to burden anybody else. But it wasn’t until years later that I understood how truly strong she was.</p>",
        item: [{
            name: 'Ambrose Dzosa',
            image: 'img/img-placeholder.png'
        }, {
            name: 'Johannah Deakin',
            image: 'img/img-placeholder.png'
        }]
    };

    $scope.players = [{
        name: 'Ambrose Dzosa',
        image: 'img/img-placeholder.png'
    }, {
        name: 'Johannah Deakin',
        image: 'img/img-placeholder.png'
    }, {
        name: 'Jack White',
        image: 'img/img-placeholder.png'
    }, {
        name: 'Matt Smith',
        image: 'img/img-placeholder.png'
    }, {
        name: 'May Smith',
        image: 'img/img-placeholder.png'
    }];
})

.controller('CoachBlogDetailCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal, $stateParams, toastr, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coach/coach-blog-detail");
    $scope.menutitle = NavigationService.makeActiveCoach("Blog Detail");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();
    $scope.data = [{
        title: 'The Strongest Woman I’ve Ever Known Ever Known',
        img: 'img/ground.png',
        date: '4th October 2015',
        ratingup: '4.5',
        ratingdown: '1.5',
    }, {
        title: 'Dhoni and Kohli playing together',
        img: 'img/kohlidhoni.jpg',
        date: '3rd November 2015',
        ratingup: '3.5',
        ratingdown: '2.5',
    }, {
        title: 'What You Dont Know About: Being a GM',
        img: 'img/i.jpeg',
        date: '3rd December 2015',
        ratingup: '2.5',
        ratingdown: '2.5',
    }];

    $scope.players = [{
        name: 'Ambrose Dzosa',
        image: 'img/img-placeholder.png'
    }, {
        name: 'Johannah Deakin',
        image: 'img/img-placeholder.png'
    }, {
        name: 'Jack White',
        image: 'img/img-placeholder.png'
    }, {
        name: 'Matt Smith',
        image: 'img/img-placeholder.png'
    }, {
        name: 'May Smith',
        image: 'img/img-placeholder.png'
    }];

})

.controller('FAQCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal, $stateParams, toastr, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("faq");
    $scope.menutitle = NavigationService.makeActiveCoach("FAQ's");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();
    $scope.template.header = 'views/header2.html';
    $scope.oneAtATime = true;
})

.controller('ContactUsCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal, $stateParams, toastr, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("contact-us");
    $scope.menutitle = NavigationService.makeActiveCoach("Contact Us");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();
    $scope.template.header = 'views/header2.html';
})

.controller('TermsServicesCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal, $stateParams, toastr, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("terms-services");
    $scope.menutitle = NavigationService.makeActiveCoach("Terms of Services");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();
    $scope.template.header = 'views/header2.html';
})

.controller('PrivacyPolicyCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal, $stateParams, toastr, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("privacy-policy");
    $scope.menutitle = NavigationService.makeActiveCoach("Privacy Policy");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();
    $scope.template.header = 'views/header2.html';
})

.controller('NotificationCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("notification");
    $scope.menutitle = NavigationService.makeActiveCoach("Notification");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();
})

.controller('RegisterAthletesCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    $scope.template = TemplateService.changecontent("athletes/register-athletes");
    TemplateService.title = "Athletes Registration";
    $scope.template.header = 'views/header2.html';
    $scope.formData = {};
})

.controller('AthletesProfileCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("athletes/athletes-profile");
    $scope.menutitle = NavigationService.makeActiveCoach("Profile");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavAthlete();
})

.controller('AthletesProfileEditCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("athletes/athletes-profile-edit");
        $scope.menutitle = NavigationService.makeActiveCoach("Profile");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getNavAthlete();
        $scope.formData = {
            name: 'Virat',
            surname: 'Kohli',
            image: 'http://2.bp.blogspot.com/-TgdKBlUGk90/T0PhPlFOf8I/AAAAAAAAAVc/jijEQ8u1uUg/s1600/387430_257363124319593_257347670987805_670782_1318978483_n.jpg',
            yearsCoaching: 2,
            email: 'sachin@gmail.com',
            gender: 'Male',
            contact: '+919098765324',
            dob: new Date(),
            country: 'ind',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod, turpis at auctor interdum, enim neque placerat diam, ac faucibus sem elit in sapien. Vivamus sodales et libero ac consectetur. Curabitur hendrerit lacus nisi, eget euismod felis gravida vitae. Nullam faucibus maximus eros, non facilisis magna tincidunt quis. Ut suscipit fringilla quam eu scelerisque. Proin orci lacus, condimentum eget urna at, aliquam pellentesque mauris. Aenean rutrum diam tortor, sed finibus nibh condimentum ac. Sed et blandit arcu.',
            achivements: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod, turpis at auctor interdum, enim neque placerat diam, ac faucibus sem elit in sapien. Vivamus sodales et libero ac consectetur. Curabitur hendrerit lacus nisi, eget euismod felis gravida vitae. Nullam faucibus maximus eros, non facilisis magna tincidunt quis. Ut suscipit fringilla quam eu scelerisque. Proin orci lacus, condimentum eget urna at, aliquam pellentesque mauris. Aenean rutrum diam tortor, sed finibus nibh condimentum ac. Sed et blandit arcu.',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod, turpis at auctor interdum, enim neque placerat diam, ac faucibus sem elit in sapien. Vivamus sodales et libero ac consectetur. Curabitur hendrerit lacus nisi, eget euismod felis gravida vitae. Nullam faucibus maximus eros, non facilisis magna tincidunt quis. Ut suscipit fringilla quam eu scelerisque. Proin orci lacus, condimentum eget urna at, aliquam pellentesque mauris. Aenean rutrum diam tortor, sed finibus nibh condimentum ac. Sed et blandit arcu.',
        };

        $scope.submit = function(data) {
            console.log(data);
            $state.go('app.profile');
        };
    })
    .controller('AthletesCompetitionCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("athletes/athletes-competition");
        $scope.menutitle = NavigationService.makeActiveCoach("Competition");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getNavAthlete();

        $scope.openReject = function() {
            var modalInstance = $uibModal.open({
                scope: $scope,
                templateUrl: 'views/modal/modal-reject.html'
            });
        };
    })

.controller('ForbiddenCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state, toastr) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("forbidden");
    $scope.menutitle = NavigationService.makeActiveCoach("Access Forbidden");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();

});
