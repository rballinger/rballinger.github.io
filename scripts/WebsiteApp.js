var app = angular.module("websiteApp", ['ngRoute']).
  config(function($routeProvider, $locationProvider){
    $routeProvider.
      when('/', {templateUrl:'partials/about.html'}).
      when('/pastprojects', {templateUrl: 'partials/pastprojects.html'}).
      when('/currentprojects', {templateUrl: 'partials/currentprojects.html'}).
      when('/futureprojects', {templateUrl: 'partials/futureprojects.html'}).
      when('/skills', {templateUrl: 'partials/skills.html'}).
      when('/algorithms', {templateUrl: 'partials/algorithms.html'}).
      otherwise({redirectTo: '/'});
      $locationProvider.html5Mode(true);
  });

app.controller("ViewController", ["$scope", function($scope){

}]);