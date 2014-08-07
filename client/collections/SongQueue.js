// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  initialize: function(){
  },

  playFirst: function() {
    if (this.at(0)) {
      this.at(0).play();
      this.at(0).dequeue();
    }
  }
});
