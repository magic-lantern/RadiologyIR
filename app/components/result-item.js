import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Component.extend({
  actions:{
    logclick: function() {
      console.log('called logclick function', this.get('result.ObjectId'));
      Ember.$.post( ENV.apiHost + '/logClick', {
        'ObjectId': this.get('result.ObjectId'),
        'id': this.get('result.id')
      }, function( data ) {
        console.log(data);
      });
    }
  }
});
