var PlaylistLibrary = Backbone.Model.extend({
  initialize: function() {
    this.set('playlists', ["testPlaylist"]);
  },

  // where does this propagate?
  addNewPlaylist: function() {
    this.trigger('addNewPlaylist', this);
  }
});
