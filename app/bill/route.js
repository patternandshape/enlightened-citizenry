import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var billUrl = 'http://congress.api.sunlightfoundation.com/bills?bill_id=' + params.bill_id + '&apikey=209a3433698a40978a2a5fb6c519e27e';

    return Ember.RSVP.hash({
      bills: Ember.$.getJSON(billUrl).then(function(responseJSON){
          return responseJSON.results;
        })
    });
  }
});
