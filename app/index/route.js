import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url = 'http://congress.api.sunlightfoundation.com/committees?subcommittee=false&apikey=209a3433698a40978a2a5fb6c519e27e';

      return Ember.$.getJSON(url).then(function(responseJSON){
        return responseJSON.results;
      });
  },
  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    }
  }
});
