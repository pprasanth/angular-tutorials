var app = angular.module('myApp', []);
app.controller('myCtrl', function(mainService) {
  this.title = "HTTP Services";
  var vm = this;
  mainService.getPosts().then(function(res) {
    vm.posts = res.data;
  });
});

app.service('mainService', function($http) {
  this.getPosts = function() {
    return $http.get('https://jsonplaceholder.typicode.com/posts');
  };
});
