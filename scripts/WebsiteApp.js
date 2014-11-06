var app = angular.module("websiteApp", ['ngRoute']);
var timer;

app.config(function($routeProvider){
  $routeProvider.
    when('/', {templateUrl:'partials/about.html', controller:'AboutController'}).
    when('/pastprojects', {templateUrl: 'partials/pastprojects.html', controller:'PastProjectsController'}).
    when('/currentprojects', {templateUrl: 'partials/currentprojects.html', controller:'CurrentProjectsController'}).
    when('/futureprojects', {templateUrl: 'partials/futureprojects.html', controller:'FutureProjectsController'}).
    when('/skills', {templateUrl: 'partials/skills.html', controller:'SkillsController'}).
    when('/blog', {templateUrl: 'partials/blog.html', controller:'BlogController'}).
    when('/contact', {templateUrl: 'partials/contact.html', controller:'ContactController'}).
    otherwise({redirectTo: '/'});
});

app.controller("ViewController", ["$scope", function($scope){
  
}]);

app.controller("AboutController", ["$scope", "$window", function($scope, $window){
  var delay = 10000;
  var currentSlide = 1;
  var maxSlide = 3;
  var width;
  var small = true;
  var w = angular.element($window);

  w.$('.active').removeClass("active");
  w.$('#about').addClass("active");

  w.$('.active').removeClass("active");
  w.$('#about').addClass("active");

  $scope.slideClick = function(iconName, $event){
    $event.preventDefault();
    if($event.originalEvent){
      timer = w.clearInterval(timer);
    }
    switch(iconName){
      case "right":
        w.$("#slide"+currentSlide).toggle("slide", {direction:"left"}, function(){
          w.$("#slideIcon"+currentSlide).removeClass("fa-dot-circle-o").addClass("fa-circle-o");
          currentSlide++;
          if(currentSlide > maxSlide)
            currentSlide = 1;
          w.$("#slide"+currentSlide).toggle("slide", {direction:"right"});
          w.$("#slideIcon"+currentSlide).removeClass("fa-circle-o").addClass("fa-dot-circle-o");
        });
        break;
      case "left":
        w.$("#slide"+currentSlide).toggle("slide", {direction:"right"},function(){
          w.$("#slideIcon"+currentSlide).removeClass("fa-dot-circle-o").addClass("fa-circle-o");
          currentSlide--;
          if(currentSlide < 1)
            currentSlide = maxSlide;
          w.$("#slide"+currentSlide).toggle("slide", {direction:"left"});
          w.$("#slideIcon"+currentSlide).removeClass("fa-circle-o").addClass("fa-dot-circle-o");
        });
        break;
      case "1":
      case "2":
      case "3":
        if(iconName > currentSlide){
          w.$("#slide"+currentSlide).toggle("slide", {direction:"left"}, function(){
            w.$("#slideIcon"+currentSlide).removeClass("fa-dot-circle-o").addClass("fa-circle-o");
            currentSlide = iconName;
            w.$("#slide"+currentSlide).toggle("slide", {direction:"right"});
            w.$("#slideIcon"+currentSlide).removeClass("fa-circle-o").addClass("fa-dot-circle-o");
          });
        }else if(iconName < currentSlide){
          w.$("#slide"+currentSlide).toggle("slide", {direction:"right"},function(){
            w.$("#slideIcon"+currentSlide).removeClass("fa-dot-circle-o").addClass("fa-circle-o");
            currentSlide = iconName;
            w.$("#slide"+currentSlide).toggle("slide", {direction:"left"});
            w.$("#slideIcon"+currentSlide).removeClass("fa-circle-o").addClass("fa-dot-circle-o");
          });
        }
        break;
    }
    if($event.originalEvent){
      timer = setInterval(autoslide, delay);
    }
  };

  function autoslide(){
    w.$(".glyphicon-circle-arrow-right").click();
  };

  function resized(){
    width = w.outerWidth;
    if(width < 768){
      if(!small){
        w.clearInterval(timer);
        small = true;
      }
    }else{
      if(small){
        timer = w.setInterval(autoslide, delay);
        small = false;
      }
    }
  }
  
  w.bind('resize', resized);
  resized();
}]);

app.controller("PastProjectsController", ["$scope", "$window", function($scope, $window){
  $window.clearInterval(timer);
  $window.alert("using pastprojects controller");
}])

app.controller("CurrentProjectsController", ["$scope", "$window", function($scope, $window){
  $window.clearInterval(timer);
  $window.alert("using currentprojects controller");
}]);

app.controller("FutureProjectsController", ["$scope", "$window", function($scope, $window){
  $window.clearInterval(timer);
  $window.alert("using futureprojects controller");
}]);

app.controller("SkillsController", ["$scope", "$window", function($scope, $window){
  $window.clearInterval(timer);
  $window.alert("using skills controller");
}]);

app.controller("BlogController", ["$scope", "$window", function($scope, $window){
  $window.clearInterval(timer);
  $window.alert("using Blog controller");
}]);

app.controller("ContactController", ["$scope", "$window", function($scope, $window){
  $window.clearInterval(timer);
  $window.alert("using contact controller");
}]);