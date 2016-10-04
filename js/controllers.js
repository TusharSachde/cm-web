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
    $scope.menutitle = NavigationService.makeactive("Login");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.template.header = 'views/header2.html';

    $scope.formData = {};
    $scope.loginType = 'coach';
})

.controller('RegisterCoachCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    $scope.template = TemplateService.changecontent("register-coach");
    $scope.menutitle = NavigationService.makeactive("Coach Registeration");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.template.header = 'views/header2.html';
})

.controller('CoachProfileCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coach-profile");
    $scope.menutitle = NavigationService.makeactive("Profile");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('CoachAthletesCoachedCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $uibModal) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coach-athletes-coached");
    $scope.menutitle = NavigationService.makeactive("Athletes Coached");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

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
    $scope.menutitle = NavigationService.makeactive("Competition");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

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
    $scope.menutitle = NavigationService.makeactive("Testing");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
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
    $scope.menutitle = NavigationService.makeactive("Testing Create");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.testStep = 'test';
    console.log($scope.testStep);

})

.controller('CoachBlogCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $uibModal, $stateParams, toastr, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coach-blog");
    $scope.menutitle = NavigationService.makeactive("Blog");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})

.controller('CoachBlogDetailCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state, $uibModal, $stateParams, toastr, $filter) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("coach-blog-detail");
    $scope.menutitle = NavigationService.makeactive("Blog Detail");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

})

.controller('ForbiddenCtrl', function ($scope, TemplateService, NavigationService, $timeout, $stateParams, $state, toastr) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("forbidden");
    $scope.menutitle = NavigationService.makeactive("Access Forbidden");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

});