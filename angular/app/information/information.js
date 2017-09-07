'use strict';

/**
 * module list of all of 'information's subpages
 */
angular.module('myApp.information', [
    'ngRoute',
    'myApp.information.resources',
    'myApp.information.faq'
])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/information', {
            templateUrl: content.landing.url.toString(),
            controller: 'informationCtrl'
        });
    }])
    .controller('informationCtrl', [function() {

    }]);

/**
 * Define module for information/resources
 */
angular.module('myApp.information.resources', ['ngRoute'])


    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/information/resources', {
            templateUrl: content.resources.url.toString(),
            controller: 'informationCtrl'
        });
    }])
    .controller('informationCtrl', [function() {

    }]);

/**
 * Define module for information/faq
 */
angular.module('myApp.information.faq', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/information/faq', {
            templateUrl: content.faq.url.toString(),
            controller: 'informationCtrl'
        });
    }])
    .controller('informationCtrl', [function() {

    }]);

var content = {
    landing: {
        url: 'information/information.html'
    },
    faq: {
        url: 'information/resources.html'
    },
    resources: {
        url: 'information/faq.html'
    }
    // sideBar: "pageContents/activities.html #sideBar",
    // banner: DEV_SRC_LOCATION + "informationBanner.jpg"

};
