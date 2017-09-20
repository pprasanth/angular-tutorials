var app = angular.module('myApp', []);
app.controller('myCtrl', function() {
  this.title = "HTTP Services";

});

app.service('mainService', function($http) {
  this.getPosts = function() {
    return $http.get('https://jsonplaceholder.typicode.com/posts');
  };
});
