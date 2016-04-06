import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var committeeUrl = 'http://congress.api.sunlightfoundation.com/committees?committee_id=' + params.committee_id + '&subcommittee=false&apikey=' + key;

    var subCommitteeUrl =
    'http://congress.api.sunlightfoundation.com/committees?subcommittee=true&parent_committee_id=' + params.committee_id + '&apikey=' + key;

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
