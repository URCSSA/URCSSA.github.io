'use strict';

/**
 * module list of all of 'about's subpages
 */
angular.module('myApp.about', [
    'ngRoute',
    'myApp.about.team',
    'myApp.about.mission'
])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/about', {
            templateUrl: content.landing.url.toString(),
            controller: 'aboutCtrl'
        });
    }])
    .controller('aboutCtrl', [function() {

    }]);

/**
 * Define module for about/team
 */
angular.module('myApp.about.team', ['ngRoute'])


    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/about/team', {
            templateUrl: content.team.url.toString(),
            controller: 'aboutCtrl'
        });
    }])
    .controller('aboutCtrl', [function() {

    }]);

/**
 * Define module for about/mission
 */
angular.module('myApp.about.mission', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/about/mission', {
            templateUrl: content.mission.url.toString(),
            controller: 'aboutCtrl'
        });
    }])
    .controller('aboutCtrl', [function() {

    }]);

var content = {
    landing: {
        url: 'about/information.html'
    },
    mission: {
        url: 'about/resources.html'
    },
    team: {
        url: 'about/faq.html'
    }
    // sideBar: "pageContents/activities.html #sideBar",
    // banner: DEV_SRC_LOCATION + "aboutBanner.jpg"

};
