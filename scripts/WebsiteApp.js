var app = angular.module("websiteApp", ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.
    when('/', {templateUrl:'partials/about.html', controller:'AboutController'}).
    when('/pastprojects', {templateUrl: 'partials/pastprojects.html', controller:'PastProjectsController'}).
    when('/currentprojects', {templateUrl: 'partials/currentprojects.html'}).
    when('/futureprojects', {templateUrl: 'partials/futureprojects.html'}).
    when('/skills', {templateUrl: 'partials/skills.html'}).
    when('/algorithms', {templateUrl: 'partials/algorithms.html'}).
    when('/contact', {templateUrl: 'partials/contact.html'}).
    otherwise({redirectTo: '/'});
});

app.controller("ViewController", ["$scope", function($scope){
  
}]);

app.controller("AboutController", ["$scope", "$window", function($scope, $window){
  $scope.slideClick = function(iconName, $event){
    if($event.originalEvent){
      switch(iconName){
        case "right":
          alert("right clicked");
          break;
        case "left":
          alert("left clicked");
          break;
        case "1":
          alert("1 clicked");
          break;
        case "2":
          alert("2 clicked");
          break;
      }
    }
  };






}]);

app.controller("PastProjectsController", ["$scope", "$window", function($scope, $window){
  $window.alert("using pastprojects controller");



}])