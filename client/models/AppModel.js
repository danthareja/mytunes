// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());
    this.set('currentPlaylist', new Playlist());
    this.set('isPlaying', false);

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    // eventually pass playlist argument here
    this.get('currentPlaylist').on('playAll', function() {
      // use native 'reset' method from Backbone collections -- maybe separate?
      this.get('songQueue').reset();
      this.set('isPlaying', false);
      console.log(this.get('songQueue'));
      this.get('currentPlaylist').forEach(function(song) {
        song.enqueue();
      });
    }, this);

    params.playlistLibrary.on('addNewPlaylist', function(song) {

    }, this);

    params.library.on('addToPlaylist', function(song) {
      console.log('currentPlaylist');
      // change to add to specific playlist name
      this.get('currentPlaylist').add(song);
    }, this);

    params.library.on('play', function(song){
      this.set('currentSong', song);
      this.set('isPlaying', true);
    }, this);

    // is there an optimized to put logic?
    params.library.on('enqueue', function(song){
      // use native "add" method from Backbone collections
      this.get('songQueue').add(song);
      if (this.get('isPlaying') === false) {
        this.get('songQueue').playFirst();
      }
    }, this);

    params.library.on('removeFromQueue', function(song){
      this.get('songQueue').remove(song);
    }, this);

    params.library.on('dequeue', function(){
      this.get('songQueue').remove(this.get('songQueue').at(0));
    }, this);

    params.library.on('ended', function(song){
        this.set('isPlaying', false);
        this.get('songQueue').playFirst();
    }, this);
  }

});
