App = Ember.Application.create();

App.Router.map(function(){
  this.resource('about')
  this.resource('posts', function() {
    this.resource('post',{ path: ':post_id'});
  });
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return posts;
  }
});
var posts = [{
  id: '1',
  title: 'rails',
  author: {name: 'raj'},
  body: 'i want to learn ror'
},{
  id: '2',
  title: 'ember',
  author: {name: 'anand'},
  body: 'i want to learn ember'
}
            
];
