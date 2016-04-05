import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=209a3433698a40978a2a5fb6c519e27e&zip=' + params.zip;

      return Ember.$.getJSON(url).then(function(responseJSON){
        return responseJSON.results;
      });
  }
});
