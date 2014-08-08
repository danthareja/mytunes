var Playlist = Songs.extend({

  model: SongModel,

  defaults: {
    playlistName: 'untitled'
  },

  playAll: function() {
    this.trigger('playAll', this);
  }

});
