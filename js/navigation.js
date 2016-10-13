// var adminurl = "http://localhost:1337/api/";
var adminurl = "http://104.155.238.145/api/";
var imgurl = adminurl + "upload/";

var imgpath = imgurl + "readFile";
var uploadurl = imgurl;

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function ($http) {
    var navigationCoach = [{
        name: "Profile",
        classis: "active",
        sref: "coach-profile", //Keep sref empty if subnav
        icon: "user",
        subnav: []
    }, {
        name: "Athletes Coaching",
        classis: "active",
        sref: "coach-athletes-coached", //Keep sref empty if subnav
        icon: "timer",
        subnav: []
    }, {
        name: "Competition",
        classis: "active",
        sref: "coach-competition", //Keep sref empty if subnav
        icon: "users",
        subnav: []
    }, {
        name: "Test",
        classis: "active",
        sref: "coach-testing", //Keep sref empty if subnav
        icon: "speed-fast",
        subnav: []
    }, {
        name: "Blogs",
        classis: "active",
        sref: "coach-blog", //Keep sref empty if subnav
        icon: "archive",
        subnav: []
    }];

    var navigationAthlete = [{
        name: "Profile",
        classis: "active",
        sref: "athletes-profile", //Keep sref empty if subnav
        icon: "user",
        subnav: []
    }, {
        name: "Training Diary",
        classis: "active",
        sref: "athletes-training-diary", //Keep sref empty if subnav
        icon: "user",
        subnav: []
    }];


    return {
        getNavCoach: function () {
            return navigationCoach;
        },
        getNavAthlete: function () {
            return navigationAthlete;
        },
        makeActiveCoach: function (menuname) {
            for (var i = 0; i < navigationCoach.length; i++) {
                if (navigationCoach[i].name == menuname) {
                    navigationCoach[i].classis = "active";
                } else {
                    navigationCoach[i].classis = "";
                }
            }
            return menuname;
        },
        makeActiveAthlete: function (menuname) {
            for (var i = 0; i < navigationAthlete.length; i++) {
                if (navigationAthlete[i].name == menuname) {
                    navigationAthlete[i].classis = "active";
                } else {
                    navigationAthlete[i].classis = "";
                }
            }
            return menuname;
        }

    };
});