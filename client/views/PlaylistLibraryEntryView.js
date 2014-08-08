var PlaylistLibraryEntryView = Backbone.View.extend({

  tagName: 'option',

  // template: _.template('<td class="artist">(<%= artist %>)</td>' +
  //                       '<td class="title"><%= title %></td>' +
  //                       '<td><%= playCount %></td>' +
  //                       '<td><button class="enqueue">Add to queue</button></td>' +
  //                       '<td><select class="addToPlaylist">Add to playlist</select></td>'),

  // events: {
  //   'click .title': function() {
  //     this.model.play();
  //   },
  //   'click .artist': function() {
  //     this.model.play();
  //   },
  //   'click .enqueue': function() {
  //     this.model.enqueue();
  //   },
  //   'click .addToPlaylist': function() {
  //     this.model.addToPlaylist();
  //   }
  // },

  render: function(){
    return this.$el.html("test");
  }

});

// Within select, we need an option for each playlist already created
// Plus a default option of "create new playlist"
