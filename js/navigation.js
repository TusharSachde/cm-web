// var adminurl = "http://localhost:1337/api/";
var adminurl = "http://104.155.238.145/api/";
var imgurl = adminurl + "upload/";

var imgpath = imgurl + "readFile";
var uploadurl = imgurl;

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function ($http) {
    var navigation = [{
        name: "Employee",
        classis: "active",
        anchor: "company",
        icon: "user",
        subnav: [{
            name: "Profile",
            classis: "active",
            anchor: "coach.profile",
            icon: "user"
        }]
    }, {
        name: "Timeline",
        classis: "active",
        anchor: "timeline",
        icon: "calendar",
        subnav: [{
            name: "Music Broadcast Ltd",
            classis: "active",
            anchor: "timeline",
            icon: "music"
        }]
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