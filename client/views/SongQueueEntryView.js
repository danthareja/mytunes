// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="artist">(<%= artist %>)</td>' +
                        '<td class="title"><%= title %></td>' +
                        '<td><button class="removeFromQueue">Remove from queue</button></td>'),

  events: {
    'click .removeFromQueue': function() {
      this.model.removeFromQueue();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});

