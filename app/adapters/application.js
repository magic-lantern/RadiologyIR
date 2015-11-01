import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend({
  host: ENV.apiHost,
  handleResponse: function(status, headers, payload) {
    // no status likely means IRServer not running
    // TODO: figure out how to get Ember to not crash if this is the case
    if (status === 0) {
      console.log(`ERROR : no value returned from ENV.apiHost - check to see if service running.`);
    }
    return this._super(...arguments);
  }
});
