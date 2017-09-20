var app = angular.module('myApp',[]);
app.controller('myCtrl', function() {
  this.title = 'Directives';
  this.fruits = [
    'apple',
    'orange',
    'grape'
  ];
});

app.filter('makePural', function() {
  return function(input) {
    return input + 's';
  };
});
