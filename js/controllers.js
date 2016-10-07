var globalfunction = {};
angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ui.select', 'ngAnimate', 'toastr', 'ngSanitize', 'angular-flexslider', 'ui.tinymce', 'imageupload', 'ngMap', 'toggle-switch', 'cfp.hotkeys', 'ui.sortable'])


.controller('headerctrl', function ($scope, TemplateService, $uibModal) {
    $scope.template = TemplateService;

    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });

    globalfunction.confDel = function (callback) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/modal/conf-delete.html',
            size: 'sm',
            scope: $scope
        });
        $scope.close = function (value) {
            callback(value);
            modalInstance.close("cancel");
        };
    };
})

.controller('LoginCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        $scope.template = TemplateService.changecontent("login");
        TemplateService.title = "Login";
        $scope.template.header = 'views/header2.html';

        $scope.formData = {};
        $scope.loginType = 'coach';
    })
    .controller('ForgotPasswordCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        $scope.template = TemplateService.changecontent("forgot-password");
        TemplateService.title = "Login";
        $scope.template.header = 'views/header2.html';
    })
    .controller('RegisterCoachCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        $scope.template = TemplateService.changecontent("register-coach");
        TemplateService.title = "Coach Registeration";
        $scope.template.header = 'views/header2.html';
        $scope.formData = {};
        $scope.coachingFocus = [
            'Sprinting', 'Middle Distance', 'Endurance', 'Throws', 'Jumps', 'Hurdles', 'Hill/Fell Running', 'Cross Country'
        ];
        $scope.specialisations = [
            'Coaching athletes with a disability', 'Coaching female athletes', 'Eating disorders', 'First aid', 'Long-term athlete development', 'Mentored practice', 'Strength and conditioning', 'Fitness in Running and Walking', 'Children in Athletics'
        ];
    })

.controller('CoachProfileCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coach-profile");
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

.controller('CoachProfileEditCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("coach-profile-edit");
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

        $scope.submit = function (data) {
            console.log(data);
            $state.go('app.profile');
        };
    })
    .controller('CoachAthletesCoachedCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("coach-athletes-coached");
        $scope.menutitle = NavigationService.makeActiveCoach("Athletes Coached");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getNavCoach();

        $scope.athletesRequest = function () {
            var modalInstance = $uibModal.open({
                scope: $scope,
                templateUrl: 'views/modal/modal-athletes-coached.html',
                size: 'lg'
            });
        };
    })

.controller('CoachAthletesCoachedViewCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coach-athletes-coachedview");
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

})


.controller('CoachCompetitionCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coach-competition");
    $scope.menutitle = NavigationService.makeActiveCoach("Competition");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();

    $scope.addCompetition = function () {
        var modalInstance = $uibModal.open({
            scope: $scope,
            templateUrl: 'views/modal/modal-competition-add.html'
        });
    };

    $scope.editCompetition = function () {
        var modalInstance = $uibModal.open({
            scope: $scope,
            templateUrl: 'views/modal/modal-competition-edit.html'
        });
    };

    $scope.assignCompetition = function () {
        var modalInstance = $uibModal.open({
            scope: $scope,
            templateUrl: 'views/modal/modal-competition-assign.html'
        });
    };

    $scope.scoreCompetition = function () {
        var modalInstance = $uibModal.open({
            scope: $scope,
            templateUrl: 'views/modal/modal-competition-score.html',
            size: 'lg'
        });
    };
})


.controller('CoachCompetitionCreateCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coach-competition-create");
    $scope.menutitle = NavigationService.makeActiveCoach("Competition");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();
    $scope.title = "Add Competition";
    $scope.players = [{
        name: 'Ambrose Dzosa',
    }, {
        name: 'Johannah Deakin'
    }, {
        name: 'Jack White'
    }, {
        name: 'Matt Smith',
    }, {
        name: 'May Smith',
    }]
})

.controller('CoachCompetitionEditCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("coach-competition-create");
        $scope.menutitle = NavigationService.makeActiveCoach("Competition");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getNavCoach();
        $scope.title = "Edit Competition";
        $scope.players = [{
            name: 'Ambrose Dzosa',
        }, {
            name: 'Johannah Deakin'
        }, {
            name: 'Jack White'
        }, {
            name: 'Matt Smith',
        }, {
            name: 'May Smith',
        }]
    })
    .controller('CoachTestingCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $uibModal, $stateParams, toastr, $filter) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("coach-testing");
        $scope.menutitle = NavigationService.makeActiveCoach("Testing");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getNavCoach();
        $scope.assignTesting = function () {
            var modalInstance = $uibModal.open({
                scope: $scope,
                templateUrl: 'views/modal/modal-testing-assign.html'
            });
        };

        $scope.scoreTesting = function () {
            var modalInstance = $uibModal.open({
                scope: $scope,
                templateUrl: 'views/modal/modal-testing-score.html',
                size: 'lg'
            });
        };
    })

.controller('CoachTestingCreateCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $uibModal, $stateParams, toastr, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coach-testing-create");
    $scope.menutitle = NavigationService.makeActiveCoach("Testing Create");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();

    $scope.testStep = 'test';

})

.controller('CoachBlogCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $uibModal, $stateParams, toastr, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coach-blog");
    $scope.menutitle = NavigationService.makeActiveCoach("Blog");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();
    $scope.data = [{
        title: 'The Strongest Woman I’ve Ever Known',
        img: 'img/ground.png',
        date: '4th October 2015',
        rating: '4.5'
    }, {
        title: 'What You Dont Know About: Being a GM',
        img: 'img/ground.png',
        date: '3rd November 2015',
        rating: '3.5'
    }, {
        title: 'What You Dont Know About: Being a GM',
        img: 'img/ground.png',
        date: '3rd November 2015',
        rating: '3.5'
    }, {
        title: 'What You Dont Know About: Being a GM',
        img: 'img/ground.png',
        date: '3rd November 2015',
        rating: '3.5'
    }, {
        title: 'What You Dont Know About: Being a GM',
        img: 'img/ground.png',
        date: '3rd November 2015',
        rating: '3.5'
    }];

})

.controller('CoachBlogCreateCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $uibModal, $stateParams, toastr, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coach-blog-create");
    $scope.menutitle = NavigationService.makeActiveCoach("Blog");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();

})

.controller('CoachBlogDetailCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $uibModal, $stateParams, toastr, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coach-blog-detail");
    $scope.menutitle = NavigationService.makeActiveCoach("Blog Detail");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();

})

.controller('ForbiddenCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $state, toastr) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("forbidden");
    $scope.menutitle = NavigationService.makeActiveCoach("Access Forbidden");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();

});