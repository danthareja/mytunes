// PlaylistView.js - Defines a backbone view class for the song queue.
var PlaylistView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
  },

  events: {
    'click .playAll': function() {
      this.collection.playAll();
    }
  },

  // TODO: figure out how to render JUST the new song added to queue,
  // not entire queue list
  render: function() {
    this.$el.html('<th>Playlist <button class="playAll">Play All</button></th>').append(
      this.collection.map(function(song){
        return new PlaylistEntryView({model: song}).render();
      })
    );
  }
});
