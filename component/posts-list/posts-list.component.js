function postsListController(mainService) {
  var vm = this;
  mainService.getPosts().then(function(res) {
    vm.posts = res.data;
  });
}

app.component('postsList', {
  templateUrl: 'posts-list/posts-list.html',
  controller: postsListController,
  controllerAs: 'vm'
});
