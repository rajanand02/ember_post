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
App.PostController = Ember.ObjectController.extend({
  isEditing: false,

  actions: {
      edit: function(){
        this.set('isEditing', true);
      },

      doneEditing: function(){
          this.set('isEditing', false);
      }
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
