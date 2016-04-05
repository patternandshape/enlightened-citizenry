import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ('committee', committee_id);
  }
});
