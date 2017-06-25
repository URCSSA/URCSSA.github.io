'use strict';

angular.module('myApp.about', ['ngRoute'])
angular.module('myApp.about.team', ['ngRoute'])
angular.module('myApp.about.mission', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/about', {
            templateUrl: content.landing.url.toString(),
            controller: 'aboutCtrl'
        });
        $routeProvider.when('/about/team', {
            templateUrl: content.team.url.toString(),

            controller: 'aboutCtrl'
        });
        $routeProvider.when('/about/mission', {
            templateUrl: content.mission.url.toString(),
            controller: 'aboutCtrl'
        });
    }])

    .controller('aboutCtrl', [function() {

    }]);

var content = {
    landing: {
        url: 'about/about.html'
    },
    mission: {
        url: 'about/mission.html'
    },
    team: {
        url: 'about/team.html'
    }
    // sideBar: "pageContents/about.html #sideBar",
    // banner: DEV_SRC_LOCATION + "aboutBanner.jpg"

};
