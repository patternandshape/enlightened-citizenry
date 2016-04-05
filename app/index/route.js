import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var committeeUrl = 'http://congress.api.sunlightfoundation.com/committees?subcommittee=false&apikey=209a3433698a40978a2a5fb6c519e27e';

    var billUrl = 'http://congress.api.sunlightfoundation.com/bills?apikey=209a3433698a40978a2a5fb6c519e27e';

    return Ember.RSVP.hash({
      committees: Ember.$.getJSON(committeeUrl).then(function(responseJSON){
          return responseJSON.results;
        }),
      bills: Ember.$.getJSON(billUrl).then(function(responseJSON){
        return responseJSON.results;
      })
    });
  },

  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    }
  }
});
