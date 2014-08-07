// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  initialize: function(){
  },

  addToQueue: function(song) {
    this.add(song);
    // // COULD POTENTIALLY CAUSE ISSUES WITH SPECS
    if (this.length === 1) {
      this.playFirst();
    }
  },

  playFirst: function() {
    if (this.length !== 0) {
      this.at(0).play();
    }
  }
});
