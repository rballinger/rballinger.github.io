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

app.controller("ViewController", ["$scope", "$window", function($scope, $window){
  $window.$('a.link').click(function() {
    var navbar_toggle = $window.$('.navbar-toggle');
    if (navbar_toggle.is(':visible')) {
      navbar_toggle.trigger('click');
    }
  });
}]);

app.controller("AboutController", ["$scope", "$window", function($scope, $window){
  var delay = 10000;
  var currentSlide = 1;
  var maxSlide = 3;
  var width;
  var small = true;
  var w = angular.element($window);

  $window.$('.active').removeClass("active");
  $window.$('#about').addClass("active");

  $scope.slideClick = function(iconName, $event){
    $event.preventDefault();
    if($event.originalEvent){
      timer = $window.clearInterval(timer);
    }
    switch(iconName){
      case "right":
        $window.$("#slide"+currentSlide).toggle("slide", {direction:"left"}, function(){
          $window.$("#slideIcon"+currentSlide).removeClass("fa-dot-circle-o").addClass("fa-circle-o");
          currentSlide++;
          if(currentSlide > maxSlide)
            currentSlide = 1;
          $window.$("#slide"+currentSlide).toggle("slide", {direction:"right"});
          $window.$("#slideIcon"+currentSlide).removeClass("fa-circle-o").addClass("fa-dot-circle-o");
        });
        break;
      case "left":
        $window.$("#slide"+currentSlide).toggle("slide", {direction:"right"},function(){
          $window.$("#slideIcon"+currentSlide).removeClass("fa-dot-circle-o").addClass("fa-circle-o");
          currentSlide--;
          if(currentSlide < 1)
            currentSlide = maxSlide;
          $window.$("#slide"+currentSlide).toggle("slide", {direction:"left"});
          $window.$("#slideIcon"+currentSlide).removeClass("fa-circle-o").addClass("fa-dot-circle-o");
        });
        break;
      case "1":
      case "2":
      case "3":
        if(iconName > currentSlide){
          $window.$("#slide"+currentSlide).toggle("slide", {direction:"left"}, function(){
            $window.$("#slideIcon"+currentSlide).removeClass("fa-dot-circle-o").addClass("fa-circle-o");
            currentSlide = iconName;
            $window.$("#slide"+currentSlide).toggle("slide", {direction:"right"});
            $window.$("#slideIcon"+currentSlide).removeClass("fa-circle-o").addClass("fa-dot-circle-o");
          });
        }else if(iconName < currentSlide){
          $window.$("#slide"+currentSlide).toggle("slide", {direction:"right"},function(){
            $window.$("#slideIcon"+currentSlide).removeClass("fa-dot-circle-o").addClass("fa-circle-o");
            currentSlide = iconName;
            $window.$("#slide"+currentSlide).toggle("slide", {direction:"left"});
            $window.$("#slideIcon"+currentSlide).removeClass("fa-circle-o").addClass("fa-dot-circle-o");
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
    width = $window.outerWidth;
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
  
  w.bind('resize', resized);
  resized();
}]);

app.controller("PastProjectsController", ["$scope", "$window", function($scope, $window){
  $window.clearInterval(timer);
  $window.$('.active').removeClass("active");
  $window.$('#projects').addClass("active");
}])

app.controller("CurrentProjectsController", ["$scope", "$window", function($scope, $window){
  $window.clearInterval(timer);
  $window.$('.active').removeClass("active");
  $window.$('#projects').addClass("active");
}]);

app.controller("FutureProjectsController", ["$scope", "$window", function($scope, $window){
  $window.clearInterval(timer);
  $window.$('.active').removeClass("active");
  $window.$('#projects').addClass("active");
}]);

app.controller("SkillsController", ["$scope", "$window", function($scope, $window){
  $window.clearInterval(timer);
  $window.$('.active').removeClass("active");
  $window.$('#skills').addClass("active");
}]);

app.controller("BlogController", ["$scope", "$window", "$http", function($scope, $window, $http){
  $window.clearInterval(timer);
  $window.$('.active').removeClass("active");
  $window.$('#blog').addClass("active");




    <script>
      /*function jsonp_callback(data) {
        //do something with the data from the server
        
        var xmlDoc = $.parseXML(data);
        $('#xmlhere').html(data);
        //$('#xmlhere').html(xmlDoc.documentElement.getElementsByTagName("title")[0]);
        console.log(data)
      }*/

      $http.jsonp('http://pterabyte.blogspot.com/feeds/posts/default'). 
        success(function(data, status, headers, config){ 
          console.log("success: " + data); 
        }). 
        error(function(data, status, headers, config){ 
          console.log("error: " + data); 
      });
      /*
      var request = $.ajax({
        type:'GET',
        url:'http://pterabyte.blogspot.com/feeds/posts/default', // atom syn
        dataType:'jsonp'//,
        //jsonpCallback:'jsonp_callback'
      });
      request.done(function(msg){
        //x=msg.getElementsByTagName("entry")[0];
        console.log(msg);
      });
      request.fail(function(jqXHR, textStatus){
        console.log("failed: " + textStatus);
      });
      
    </script>*/
/*
  var request = $.ajax({
    type:'GET',
    crossDomain:true,
    url:'http://pterabyte.blogspot.com/feeds/posts/default', // atom syn
    dataType:'xml'
  });
  request.done(function(msg){
    x=msg.getElementsByTagName("entry")[0];
    console.log(x);
  });
  request.fail(function(jqXHR, textStatus){
    console.log("failed: " + textStatus);
  });

  $http.get('http://pterabyte.blogspot.com/feeds/posts/default'). 
    success(function(data, status, headers, config){ 
      console.log("success: " + data); 
    }). 
    error(function(data, status, headers, config){ 
      console.log("error: " + data); 
  });
*/
}]);

app.controller("ContactController", ["$scope", "$window", function($scope, $window){
  $window.clearInterval(timer);
  $window.$('.active').removeClass("active");
  $window.$('#contact').addClass("active");
}]);