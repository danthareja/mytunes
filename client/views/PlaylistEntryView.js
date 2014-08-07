// PlaylistEntryView.js - Defines a backbone view class for the song queue entries.
var PlaylistEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="artist">(<%= artist %>)</td>' +
                        '<td class="title"><%= title %></td>' +
                        '<td><button class="removeFromPlaylist">Remove from playlist</button></td>'),

  events: {
    'click .removeFromPlaylist': function() {
      this.model.removeFromPlaylist();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
