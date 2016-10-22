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
    $scope.oneAtATime = true;
    $scope.status = {
        isCustomHeaderOpen: false,
        isFirstOpen: true,
        isFirstDisabled: false
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
    $scope.changeBG = true;
    $scope.coachingFocus = [
        'Sprinting', 'Middle Distance', 'Endurance', 'Throws', 'Jumps', 'Hurdles', 'Hill/Fell Running', 'Cross Country'
    ];
    $scope.specialisations = [
        'Coaching athletes with a disability', 'Coaching female athletes', 'Eating disorders', 'First aid', 'Long-term athlete development', 'Mentored practice', 'Strength and conditioning', 'Fitness in Running and Walking', 'Children in Athletics'
    ];
    $scope.countries = NavigationService.getCountries();
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
    $scope.isCustom = true;

    $scope.formData = {
        name: 'Sachin',
        surname: 'Tendulkar',
        image: 'http://2.bp.blogspot.com/-TgdKBlUGk90/T0PhPlFOf8I/AAAAAAAAAVc/jijEQ8u1uUg/s1600/387430_257363124319593_257347670987805_670782_1318978483_n.jpg',
        yearsCoaching: 2,
        email: 'sachin@gmail.com',
        gender: 'male',
        contact: '+91 9098765324',
        dob: new Date(),
        limit: "50",
        price: 50,
        country: 'UK',
        credentials: 'Level 4',
        experience: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod, turpis at auctor interdum, enim neque placerat diam, ac faucibus sem elit in sapien",
        expertise: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod, turpis at auctor interdum, enim neque placerat diam, ac faucibus sem elit in sapien",
        achievements: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod, turpis at auctor interdum, enim neque placerat diam, ac faucibus sem elit in sapien",
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
    $scope.countries = NavigationService.getCountries();
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

.controller('CoachAthletesListCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coach/coach-athletes-list");
    $scope.menutitle = NavigationService.makeActiveCoach("Athletes Coached");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();
    $scope.athlethes = [{
        name: "Virat Kholi",
        image: "img/img-placeholder.png",
        sports: "Cricket",
        dob: "26 July,1988",
        gender: "Male",
        description: "Knowledge is power, and we were arming ourselves for the toughest fight of our lives."
    }, {
        name: "Rahul Dravid",
        image: "img/img-placeholder.png",
        sports: "Cricket",
        dob: "2 June,1985",
        gender: "Male",
        description: "Knowledge is power, and we were arming ourselves for the toughest fight of our lives."
    }, {
        name: "Ricky Pointing",
        image: "img/img-placeholder.png",
        sports: "Cricket",
        dob: "30 May,1978",
        gender: "Male",
        description: "Knowledge is power, and we were arming ourselves for the toughest fight of our lives."
    }, {
        name: "Umesh Yadav",
        image: "img/img-placeholder.png",
        sports: "Cricket",
        dob: "26 July,1985",
        gender: "Male",
        description: "Knowledge is power, and we were arming ourselves for the toughest fight of our lives."
    }];
})

.controller('CoachAthletesProfileCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coach/coach-athletes-profile");
    $scope.menutitle = NavigationService.makeActiveCoach("Athletes Coached");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();
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
    }];
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
    }];
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
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        assignedAthletes: [{
            name: 'Van Gough',
            img: 'img/img-placeholder.png'
        }],
    }, {
        name: '5KM Cycling',
        startDate: '14 January, 2017',
        endDate: '15 January, 2017',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
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
        content: " <p>Knowledge is power, and we were arming ourselves for the toughest fight of our lives.</p>",
        date: '4th October 2015',
        ratingup: '4',
        ratingdown: '1',
    }, {
        title: 'Dhoni and Kohli Together',
        img: 'img/kohlidhoni.jpg',
        content: " <p>Knowledge is power, and we were arming ourselves for the toughest fight of our lives.</p>",
        date: '6th June 2015',
        ratingup: '3',
        ratingdown: '2',
    }, {
        title: 'What You Dont Know About: Being a GM',
        img: 'img/i.jpeg',
        content: " <p>Knowledge is power, and we were arming ourselves for the toughest fight of our lives.</p>",
        date: '10th May 2015',
        ratingup: '2',
        ratingdown: '2',
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
        ratingup: '4',
        ratingdown: '1',
    }, {
        title: 'Dhoni and Kohli playing together',
        img: 'img/kohlidhoni.jpg',
        date: '3rd November 2015',
        ratingup: '3',
        ratingdown: '2',
    }, {
        title: 'What You Dont Know About: Being a GM',
        img: 'img/i.jpeg',
        date: '3rd December 2015',
        ratingup: '2',
        ratingdown: '2',
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
    $scope.status = {
        isCustomHeaderOpen: false,
        isFirstOpen: true,
        isFirstDisabled: false
    };

    $scope.faqs = [{
        heading: "Q1. What is Coach Mentor?",
        content: "<p>Coach Mentor has been designed by Coaches and Athletes … for Coaches and Athletes.</p><p>Coach mentor is a Total Support System for Coaches, Athletes and Sportspeople. It is designed to make your possibilities a reality weather your goals are to just get a little fitter, finish a race or competition, run a personal best, to become a top ten finisher in your age group or to become a national or international athlete.</p><p>Coach mentor has been designed by a GB coach who has trained national and international champions, and one of his national athletes. Most importantly it has been designedby those who have gone through the system! We know exactly what you want and need from this application to reach the next level in your performance.</p>",
    }, {
        heading: "Q2. What is the objective of Coach Mentor?",
        content: "<p>Our objective is to help every athlete, sportsperson and coach to reach his or her full potential, regardless of age, gender, location, limitation, sport or natural ability.</p>",
    }, {
        heading: "Q3. Who should use Coach Mentor?",
        content: "<p>Coach Mentor is designed for Track & Field Athletes, Road Runners, Hill & Fell Runners, Cross Country Runners, Racewalkers and Triathletes on a worldwide basis and at all levels of ability.</p><p>You can either work with your current coach or chose which coach you would like to mentor you from our extensive bank of specialist national and international coaches, all of whom are endorsed and licensed to coach. You are getting access to your very own personalised coaching service from the very best and much more. </p>",
    }, {
        heading: "Q4. Is Coach Mentor just aimed at elite Athletes and Sportspeople?",
        content: "<p>No, Coach Mentor has been designed to help athletes and sportspeople of all levels. For example, your goal may just want to improve your 5k and 10k personal bests, you might want to complete your first triathlon or improve your marathon times, you might be trying to break into national or international events – whatever your personal goals and objectives, Coach Mentor can help you.</p>",
    }, {
        heading: "Q5. What is the Training Plan?",
        content: "<p>This is the most important feature provided by the Coach and is the heart of Coach Mentor. A Coach can create, edit, delete, assign and share a training plan with an athlete/sportsperson or group of athletes/sportspeople. These athletes can be track and field, road runners, triathletes, cross country runners, hill/fell runners or racewalkers. If you are a coach you can share, if you wish your training plans with other coaches and you can also make your training plans available to purchase by other athletes and sportspeople. If you subscribe to Coach Mentor you will have access to the very best training plans that are available.</p>",
    }, {
        heading: "Q6. What is the Training Diary?",
        content: "<p>The Training Diary is the heart of the application for the coach, athlete and sportsperson. This is depicted in the form of a traditional calendar containing all your details – training schedule/plan, injury management, competition management, etc.</p><p>An athlete/sportsperson can view all the details of their trainings, competitions, injury details by navigating to a single view called the Training Diary. This basically has details of the activities carried out by the athlete/sportsperson each day and is produced by your Coach Mentor coach. The Athlete/Sportsperson completes the activities assigned by the Coach in the Training diary.</p>",
    }, {
        heading: "Q7. Does Coach Mentor manage my injuries?",
        content: "<p>Yes, interacting with your coach is vital and injury management is a key element of Coach Mentor. An athlete/sportsperson can enter injury details which go into their Training Diary and their coach is notified so that they are aware and able to adjust the Training Plan as necessary. The injury details are updated by the athlete.</p>",
    }, {
        heading: "Q8. Does Coach Mentor manage my competitions and race schedule?",
        content: "<p>Yes, interacting with your coach is vital and competition management is a key element of Coach Mentor. Your coach will suggest competitions and a race schedule for you to enter in the training plan and as an athlete/sportsperson you can accept or reject these suggestions. Your training plan will be geared around your competition and race schedule, and your overall goals and objectives.</p>",
    }, {
        heading: "Q9. Are all of the coaches qualified?",
        content: "<p>Yes, all of the coaches hold appropriate coaching qualifications applicable to the national standards of their country. The qualifications coaches hold and their associated level will vary, coaches will also tend to specialise in particular disciples or distance. The level of coaches on Coach Mentor will vary from the best in the business right through to country and first class club level coaches. There will also be specialist coaches who specialise in particular disciples or training. You are able to search for a coach with particular credentials such as qualifications, level, discipline, specialty, country, etc.</p>",
    }, {
        heading: "Q10. How does Coach Mentor work?",
        content: "<p>For the first time coaches and athletes/sportspeople of all abilities can work in collaboration using a single application. Coach mentor gives coaches, athletes and sportspeople the ability to digitalise and professionalise their programmes, one-to-one feedback and personal advice from experts in their field.</p><p>Coach Mentor is designed for Track & Field Athletes, Road Runners, Hill & Fell Runners, Cross Country Runners, Racewalkers and Triathletes on a worldwide basis.  </p><p>You can either work with your current coach or you can chose which coach you would like to mentor you from our extensive bank of specialist national and international coaches, all of whom are endorsed and licensed to coach. You are getting access to your very own personalised coaching service from the very best and much more. </p>",
    }, {
        heading: "Q11. What are the benefits of Coach Mentor?",
        content: "<p>Coach Mentor has many benefits for Coaches, Athletes and Sportspeople. You have the ability to work with top level specialist coach that is not available anywhere else. Many of these coaches have coached the best athletes and sportspeople across the world. All your training plans, training diary, injury management and competition management are held in one application with full integration and interaction between you and your coach. </p>",
    }, {
        heading: "Q12. What if I am a coach and an athlete?",
        content: "<p>You can be a Coach and an Athlete/Sportsperson on Coach Mentor. You just need to register twice, once as a coach and once as an Athlete/Sportsperson. Remember coach registration is free.</p>",
    }, {
        heading: "Q13. Do you accept athletes, sportspeople and coaches from outside of the UK?",
        content: "<p>Yes, Coach Mentor is a global system and there is no reason that a foreign coach cannot mentor an athlete/sportsperson from another country and vice versa. In fact, there are benefits in this as certain countries tend to have coaching expertise that may be at a high standard than the country that the athlete/sportsperson resides. For road runners, triathletes, fell/hill runners, cross country and racewalkers all interaction with your coach is managed virtually and online, so you do not necessarily need to be located in the same country. Track and field athletes will tend to have local coaches so it is more likely they will be located close to each other.</p>",
    }, {
        heading: "Q14. I am a qualified professional can I offer my services to Coach Mentor?",
        content: "<p>Yes, we have a Marketplace page where individuals or companies can offer their services and products to all our registered members. Coach Mentor will check the credentials and qualifications of the services and products to the best of our ability to provide all our members with a secure, reliable system.  </p>",
    }, {
        heading: "Q15. Is there an age limit for joining Coach Mentor as an athlete, sportsperson or coach?",
        content: "<p>FNo, coaches, athletes and sportspeople can join Coach Mentor at any age. If an athlete/sportsperson is under the age of 16, then you will need to tick the box at registration to indicate your parents/guardians approval, together with supplying their name and contact details. Anyone 16 or younger must get permission of your parents/guardians before subscribing to coach mentor.</p>",
    }, {
        heading: "Q16. Do you offer discounts for groups or clubs?",
        content: "<p>We don’t have a standard discount for groups or clubs, but we are able to offer volume discounts based on the number of people in the group or club. Please contact us using the “Contact Us” form through the Coach Mentor product with full details and we will reply to your request as soon as possible. We will do this by supplying you with a volume discount code to enter during the subscription payment process.</p>",
    }, {
        heading: "Q17. What are the benefits to coaches?",
        content: "<p>For the first time coaches of all abilities can work with their athletes and sportspeople in collaboration using a single application. Coach mentor gives coaches the ability to digitalise and professionalise their training plans and programmes. Coaches can also receive payment by selling their training plans in our marketplace and by coaching a group of individuals remotely through the Coach Mentor product. Coaches can also be personally mentored by other coaches who are at a higher level or specialists in a particular area. Our aim is to keep as many coaches in sport as possible by providing a mechanism to allow coaches to coach groups remotely and to receive payment for all the time and effort they have put into their sport over the years.</p>",
    }, {
        heading: "Q18. What are the benefits to athletes/sportspeople?",
        content: "<p>Coach Mentor offers a number of beneficial services to athletes and sportspeople. It has been designed by a GB coach who has trained national and international champions, and one of his national athletes. Coach Mentor has been designed by those who have gone through the system! We know exactly what you want and need from this application to reach the next level in your performance. Weather your goals are to just get a little fitter, finish a race or competition, run a personal best, to become a top ten finisher in your age group or to become a national or international athlete – coach mentor can help you. As part of your membership you will have access to a marketplace where you can purchase specialist services and products, and additional training plans. We also offer specialist blogs from experts in their field like sports nutrition, sports psychology, strength and conditioning, tips and techniques, etc. These will be available as free and paid blogs, and will be very useful and fully complementary to your personalised coaching. These will be optional and you can also purchase the paid blogs even if you are not subscribed to coach mentor. You will also have access to our global forum, chat with others, share video footage, etc.  </p>",
    }, {
        heading: "Q19. What is the price for joining Coach Mentor?",
        content: "<p>Coach Mentor is free to coaches. Athletes and sportspeople can also register for free. If athletes and sportspeople want to use the full Coach Mentor services then there is a subscription charge which varies depending on the level of the coach you select to personally coach you. For example, a top level national or international coach will charge more than a county or club level coach. You can also use the other benefits of Coach Mentor (marketplace, forum, free blogs, paid blogs, etc.) by just registering (without subscribing), but to get the full benefits you must subscribe. You can choose to pay monthly or annually. If you pay annually you get two months free.</p>",
    }, {
        heading: "Q20. What do your blogs contain?",
        content: "<p>Coach Mentor works with some of the best coaches, specialists and academics in the business and together with Coach Mentor they offer articles, tips and techniques, papers, advice, nutrition advice, new techniques, new approaches, latest research, etc. to all those who are registered with Coach Mentor. Collectively called blogs, some of these blogs will be available free and some will be available to purchase. </p>",
    }, {
        heading: "Q21. Can I try Coach Mentor before I subscribe?  ",
        content: "<p>Yes, if you are not ready to subscribe yet, you can just register free of charge and you will have limited access to Coach Mentor. You will also have free access to the forum, free blogs, marketplace and you will be able to navigate around the application. If you decide to fully utilise Coach Mentor and work with a coach of your choice, you simply chose a coach and subscribe accordingly.</p>",
    }, ];
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

.controller('RegisterAthleteCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    $scope.template = TemplateService.changecontent("athletes/register-athlete");
    TemplateService.title = "Athletes Registration";
    $scope.template.header = 'views/header2.html';
    $scope.formData = {};
    $scope.changeBG = true;
})

.controller('AthleteProfileCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("athletes/athlete-profile");
    $scope.menutitle = NavigationService.makeActiveCoach("Profile");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavAthlete();
})

.controller('AthleteProfileEditCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("athletes/athlete-profile-edit");
    $scope.menutitle = NavigationService.makeActiveCoach("Profile");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavAthlete();
    $scope.formData = {
        name: 'Virat',
        surname: 'Kohli',
        image: 'http://2.bp.blogspot.com/-TgdKBlUGk90/T0PhPlFOf8I/AAAAAAAAAVc/jijEQ8u1uUg/s1600/387430_257363124319593_257347670987805_670782_1318978483_n.jpg',
        yearsCoaching: 2,
        email: 'sachin@gmail.com',
        gender: 'male',
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

.controller('AthleteCompetitionCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("athletes/athlete-competition");
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

.controller('AthleteMyCoachCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("athletes/athlete-mycoach");
    $scope.menutitle = NavigationService.makeActiveCoach("My Coach");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavAthlete();

    $scope.openReject = function() {
        var modalInstance = $uibModal.open({
            scope: $scope,
            templateUrl: 'views/modal/modal-reject.html'
        });
    };
})

.controller('AthleteBlogCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("athletes/athlete-blog");
    $scope.menutitle = NavigationService.makeActiveCoach("Blog");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavAthlete();
    $scope.data = [{
        title: 'The Strongest Woman I’ve Ever Known Ever Known',
        img: 'img/ground.png',
        content: " <p>Knowledge is power, and we were arming ourselves for the toughest fight of our lives.</p>",
        date: '4th October 2015',
        author:'by Jhon Hanse',
        ratingup: '4',
        ratingdown: '1',
    }, {
        title: 'Dhoni and Kohli Together',
        img: 'img/kohlidhoni.jpg',
        content: " <p>Knowledge is power, and we were arming ourselves for the toughest fight of our lives.</p>",
        date: '6th June 2015',
            author:'by Ambrose Dzousa',
        ratingup: '3',
        ratingdown: '2',
    }, {
        title: 'What You Dont Know About: Being a GM',
        img: 'img/i.jpeg',
        content: " <p>Knowledge is power, and we were arming ourselves for the toughest fight of our lives.</p>",
        date: '10th May 2015',
            author:'by Jhon Hanse',
        ratingup: '2',
        ratingdown: '2',
    }];
})

.controller('AthleteSearchCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("athletes/athlete-search-coach");
    $scope.menutitle = NavigationService.makeActiveCoach("Search");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavAthlete();

    $scope.openReject = function() {
        var modalInstance = $uibModal.open({
            scope: $scope,
            templateUrl: 'views/modal/modal-reject.html'
        });
    };


    $scope.athletesFilter = function() {
        var modalInstance = $uibModal.open({
            scope: $scope,
            templateUrl: 'views/modal/modal-filter.html',
        });
    };

    $scope.filterData = [{
        name: 'Age',
        value: ['Less than 20 years', '21 - 25 years', '26 - 30 years', '31 - 35 years', '36 - 40 years', 'More than 40 years']
    }, {
        name: 'Coaching Focus',
        value: ['Sprinting', 'Middle Distance', 'Endurance', 'Throws', 'Jumps', 'Hurdles', 'Hill/Fell Running', 'Cross Country']
    }, {
        name: 'Gender',
        value: ['Male', 'Female']
    }, {
        name: 'Credentials',
        value: ['Level 1', 'Level 2', 'Level 3', 'Level 4']
    }, {
        name: 'Coaching Experience ',
        value: ['0 - 5 years', '6 - 10 years', '11 - 15 years', '16 - 20 years', 'More than 20 years']
    }];

    $scope.filterActive = 0;
    $scope.selectedFilters = {};

    $scope.changeFilter = function(data) {
        $scope.filterActive = data;
    };
})

.controller('AthleteCoachProfileCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("athletes/athlete-coach-profile");
    $scope.menutitle = NavigationService.makeActiveCoach("Search Coaches");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavAthlete();

    $scope.openReject = function() {
        var modalInstance = $uibModal.open({
            scope: $scope,
            templateUrl: 'views/modal/modal-reject.html'
        });
    };
})

.controller('AthleteBlogDetailCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("athletes/athlete-blog-detail");
    $scope.menutitle = NavigationService.makeActiveCoach("Blog");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavAthlete();
    $scope.data = [{
        title: 'The Strongest Woman I’ve Ever Known Ever Known',
        img: 'img/ground.png',
        content: " <p>Knowledge is power, and we were arming ourselves for the toughest fight of our lives.</p>",
        date: '4th October 2015',
        author:'by Jhon Hanse',
        ratingup: '4',
        ratingdown: '1',
    }, {
        title: 'Dhoni and Kohli Together',
        img: 'img/kohlidhoni.jpg',
        content: " <p>Knowledge is power, and we were arming ourselves for the toughest fight of our lives.</p>",
        date: '6th June 2015',
            author:'by Ambrose Dzousa',
        ratingup: '3',
        ratingdown: '2',
    }, {
        title: 'What You Dont Know About: Being a GM',
        img: 'img/i.jpeg',
        content: " <p>Knowledge is power, and we were arming ourselves for the toughest fight of our lives.</p>",
        date: '10th May 2015',
            author:'by Jhon Hanse',
        ratingup: '2',
        ratingdown: '2',
    }];
})

.controller('ForbiddenCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state, toastr) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("forbidden");
    $scope.menutitle = NavigationService.makeActiveCoach("Access Forbidden");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();

});
