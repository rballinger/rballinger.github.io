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
  var timer;
  var currentSlide = 1;
  var maxSlide = 2;
  var width;
  var small = true;
  var w = angular.element($window);

  $window.$('.active').removeClass("active");
  $window.$('#about').addClass("active");

  $scope.slideClick = function(iconName, $event){
    if($event.originalEvent){
      timer = $window.clearInterval(timer);
    }
    switch(iconName){
      case "right":
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
        $window.$("#slide"+currentSlide).toggle("slide", {direction:"right"},function(){
          $window.$("#slideIcon"+currentSlide).removeClass("glyphicon-record").addClass("glyphicon-minus");
          currentSlide--;
          if(currentSlide < 1)
            currentSlide = maxSlides;
          $window.$("#slide"+currentSlide).toggle("slide", {direction:"left"});
          $window.$("#slideIcon"+currentSlide).removeClass("glyphicon-minus").addClass("glyphicon-record");
        });
        break;
      case "1":
      case "2":
        if(iconName > currentSlide){
          $window.$("#slide"+currentSlide).toggle("slide", {direction:"left"}, function(){
            $window.$("#slideIcon"+currentSlide).removeClass("glyphicon-record").addClass("glyphicon-minus");
            currentSlide = iconName;
            $window.$("#slide"+currentSlide).toggle("slide", {direction:"right"});
            $window.$("#slideIcon"+currentSlide).removeClass("glyphicon-minus").addClass("glyphicon-record");
          });
        }else if(iconName < currentSlide){
          $window.$("#slide"+currentSlide).toggle("slide", {direction:"right"},function(){
            $window.$("#slideIcon"+currentSlide).removeClass("glyphicon-record").addClass("glyphicon-minus");
            currentSlide = iconName;
            $window.$("#slide"+currentSlide).toggle("slide", {direction:"left"});
            $window.$("#slideIcon"+currentSlide).removeClass("glyphicon-minus").addClass("glyphicon-record");
          });
        }
        break;
    }
    if($event.originalEvent){
      timer = setInterval(autoslide, delay);
    }
  };

  function autoslide(){
    $window.$(".glyphicon-circle-arrow-right").click();
  };

  function resized(){
    width = $window.outerWidth();
    if(width < 768){
      if(!small){
        $window.clearInterval(timer);
        small = true;
      }
    }else{
      if(small){
        timer = $window.setInterval(autoslide, delay);
        small = false;
      }
    }
  }
  
  w.bind('resize', function(){alert("hello!");});
  resized();
}]);




app.controller("PastProjectsController", ["$scope", "$window", function($scope, $window){
  $window.alert("using pastprojects controller");



}])