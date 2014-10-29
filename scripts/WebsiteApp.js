var app = angular.module("websiteApp", ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.
    when('/', {templateUrl:'partials/about.html', controller:'AboutController'}).
    when('/pastprojects', {templateUrl: 'partials/pastprojects.html'}).
    when('/currentprojects', {templateUrl: 'partials/currentprojects.html'}).
    when('/futureprojects', {templateUrl: 'partials/futureprojects.html'}).
    when('/skills', {templateUrl: 'partials/skills.html'}).
    when('/algorithms', {templateUrl: 'partials/algorithms.html'}).
    when('/contact', {templateUrl: 'partials/contact.html'}).
    otherwise({redirectTo: '/'});
});

app.controller("ViewController", ["$scope", function($scope){
  
}]);

app.controller("AboutController", ["$scope", function($scope){
  alert("using about controller");

}]);