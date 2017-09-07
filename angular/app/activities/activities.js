'use strict';

/**
 * module list of all of 'activities's subpages
 */
angular.module('myApp.activities', [
    'ngRoute',
    'myApp.activities.past'
])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/activities', {
            templateUrl: content.landing.url.toString(),
            controller: 'activitiesCtrl'
        });

    }])
    .controller('activitiesCtrl', [function() {

    }]);

/**
 * Define module for activities/past
 */
angular.module('myApp.activities.past', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/activities/past', {
            templateUrl: content.past.url.toString(),
            controller: 'activitiesCtrl'
        });
    }])
    .controller('activitiesCtrl', [function() {

    }]);


var content = {
    landing: {
        url: 'activities/activities.html'
    },
    past: {
        url: 'activities/past.html'
    }
    // sideBar: "pageContents/activities.html #sideBar",
    // banner: DEV_SRC_LOCATION + "activitiesBanner.jpg"

};
