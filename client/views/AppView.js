// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    this.playlistView = new PlaylistView({collection: this.model.get('currentPlaylist')});
    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model, value){
      this.playerView.setSong(value);
    }, this);

    this.model.get('currentPlaylist').on('add', function(model, value){
      this.playlistView.render();
    }, this);

    this.model.get('songQueue').on('add', function(model, value){
      this.songQueueView.render();
    }, this);

    // fires for both removeFromQueue and dequeue
    this.model.get('songQueue').on('remove', function(model, value){
      this.songQueueView.render();
    }, this);

    this.model.get('songQueue').on('reset', function(model, value){
      this.songQueueView.render();
    }, this);

  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el,
      this.playlistView.$el
    ]);
  }

});
