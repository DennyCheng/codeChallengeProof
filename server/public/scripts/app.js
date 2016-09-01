/**
 * CLIENT-SIDE JAVASCRIPT
 */
var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/hero', {
            templateUrl: '/views/partials/heroAdd.html',
            controller: 'HeroController'
        })
        .when('/list', {
            templateUrl: '/views/partials/list.html',
            controller: 'ListController'
        })
        .otherwise({
            redirectTo: 'hero'
        });
}]);
