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

.controller('RegisterCoachCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    $scope.template = TemplateService.changecontent("register-coach");
    TemplateService.title = "Coach Registeration";
    $scope.template.header = 'views/header2.html';
})

.controller('CoachProfileCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coach-profile");
    $scope.menutitle = NavigationService.makeActiveCoach("Profile");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getNavCoach();
    $scope.clear = function () {
        $scope.dt = null;
    };
    $scope.dateOptions = {
        // dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };
    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };
    $scope.popup1 = {
        opened: false
    };
})

.controller('CoachProfileEditCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("coach-profile-edit");
        $scope.menutitle = NavigationService.makeActiveCoach("Profile");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getNavCoach();
        $scope.clear = function () {
            $scope.dt = null;
        };
        $scope.dateOptions = {
            // dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };
        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };
        $scope.popup1 = {
            opened: false
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