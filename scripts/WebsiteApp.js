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
  var delay = 4000;
  var timer = $window.setInterval(autoslide, delay);
  var currentSlide = 1;
  var maxSlide = 2;

  $scope.slideClick = function(iconName, $event){
    if($event.originalEvent){
      timer = $window.clearInterval(timer);
    }
    switch(iconName){
      case "right":
        alert("right clicked");
        $window.$("#slide"+currentSlide).toggle("slide", {direction:"left"}, function(){
          $window.$("#slideIcon"+currentSlide).removeClass("glyphicon-record").addClass("glyphicon-minus");
          currentSlide++;
          if(currentSlide > maxSlide)
            currentSlide = 1;
          $window.$("#slide"+currentSlide).toggle("slide", {direction:"right"});
          $window.$("#slideIcon"+currentSlide).removeClass("glyphicon-minus").addClass("glyphicon-record");
        });
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

    

    if($event.originalEvent){
      timer = setInterval(autoslide, delay);
    }
  };

  function autoslide(){
    alert("auto clicked");
    $window.$(".glyphicon-circle-arrow-right").click();
  };
}]);




app.controller("PastProjectsController", ["$scope", "$window", function($scope, $window){
  $window.alert("using pastprojects controller");



}])