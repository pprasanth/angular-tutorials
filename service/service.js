var app = angular.module('myApp', []);
app.controller('myCtrl', function($http) {
  this.title = "HTTP Services";
  var vm = this;
  $http.get('https://jsonplaceholder.typicode.com/posts').then(function(res) {
    vm.posts = res.data;
  });
});
