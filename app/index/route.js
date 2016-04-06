import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var key = config.myApiKey;
    var committeeUrl = 'http://congress.api.sunlightfoundation.com/committees?subcommittee=false&apikey=' + key;

    var billUrl = 'http://congress.api.sunlightfoundation.com/bills?apikey=' + key;

    return Ember.RSVP.hash({
      committees: Ember.$.getJSON(committeeUrl).then(function(responseJSON) {
        return responseJSON.results;
      }),
      bills: Ember.$.getJSON(billUrl).then(function(responseJSON) {
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
