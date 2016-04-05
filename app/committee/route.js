import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var committeeUrl = 'http://congress.api.sunlightfoundation.com/committees?committee_id=' + params.committee_id + '&subcommittee=false&apikey=209a3433698a40978a2a5fb6c519e27e';

    var subCommitteeUrl =
    'http://congress.api.sunlightfoundation.com/committees?subcommittee=true&parent_committee_id=' + params.committee_id + '&apikey=209a3433698a40978a2a5fb6c519e27e';

    return Ember.RSVP.hash({
      committees: Ember.$.getJSON(committeeUrl).then(function(responseJSON){
          return responseJSON.results;
        }),
      subcommittees: Ember.$.getJSON(subCommitteeUrl).then(function(responseJSON){
        return responseJSON.results;
      })
    });
  },
});
