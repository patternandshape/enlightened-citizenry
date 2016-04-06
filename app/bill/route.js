import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var billUrl = 'http://congress.api.sunlightfoundation.com/bills?bill_id=' + params.bill_id + '&apikey=' + key;

    return Ember.RSVP.hash({
      bills: Ember.$.getJSON(billUrl).then(function(responseJSON) {
        return responseJSON.results;
      })
    });
  }
});
