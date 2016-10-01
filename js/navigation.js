// var adminurl = "http://localhost:1337/api/";
var adminurl = "http://104.155.238.145/api/";
var imgurl = adminurl + "upload/";

var imgpath = imgurl + "readFile";
var uploadurl = imgurl;

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function ($http) {
    var navigation = [{
        name: "Profile",
        classis: "active",
        sref: "coach-profile", //Keep sref empty if subnav
        icon: "user",
        subnav: []
    }, {
        name: "Athletes Coached",
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
        name: "Testing",
        classis: "active",
        sref: "coach-testing", //Keep sref empty if subnav
        icon: "speed-slow",
        subnav: []
    }, {
        name: "Blog",
        classis: "active",
        sref: "coach-blog", //Keep sref empty if subnav
        icon: "archive",
        subnav: []
    }];


    return {
        getnav: function () {
            return navigation;
        },
        makeactive: function (menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        }

    };
});