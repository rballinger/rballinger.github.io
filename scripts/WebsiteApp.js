var app = angular.module("websiteApp", ['ngRoute']).
  config(function($routeProvider){
    $routeProvider.
      when('/about', {template:'partials/about.html'}).
      when('/pastprojects', {template: 'partials/pastprojects.html'}).
      when('/currentprojects', {template: 'partials/currentprojects.html'}).
      when('/futureprojects', {template: 'partials/futureprojects.html'}).
      when('/skills', {template: 'partials/skills.html'}).
      when('/algorithms', {template: 'partials/algorithms.html'}).
      otherwise({redirectTo: '/about', template:'partials/about.html'})
  });

app.controller("ViewController", ["$scope", function($scope){

}]);