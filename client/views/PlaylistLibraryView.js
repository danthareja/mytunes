// PlaylistView.js - Defines a backbone view class for the song queue.
var PlaylistLibraryView = Backbone.View.extend({

  tagName: 'select',

  initialize: function() {
    this.render();
  },

  events: {
    'change select': function() {
      this.model.addNewPlaylist();
    }
  },

  // TODO: figure out how to render JUST the new song added to queue,
  // not entire queue list
  render: function() {
    var playlists = this.model.get('playlists');
    console.log(this.collection);
    this.$el.html('<option>Select a playlist</option><option value="newPlaylist">Add a new playlist</option>').append(
      playlists.map(function(playlist){
        return new PlaylistLibraryEntryView({collection: playlist}).render();
      })
    );
  }
});
