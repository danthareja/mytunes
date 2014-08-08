// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="artist">(<%= artist %>)</td>' +
                        '<td class="title"><%= title %></td>' +
                        '<td><%= playCount %></td>' +
                        '<td><button class="enqueue">Add to queue</button></td>' +
                        '<td><select class="addToPlaylist">Add to playlist</select></td>'),

  events: {
    'click .title': function() {
      this.model.play();
    },
    'click .artist': function() {
      this.model.play();
    },
    'click .enqueue': function() {
      this.model.enqueue();
    },
    'click .addToPlaylist': function() {
      this.model.addToPlaylist();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});

// Within select, we need an option for each playlist already created
// Plus a default option of "create new playlist"
