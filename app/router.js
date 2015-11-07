import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('search-result', {
    path : "/"
  });
  this.route('error', {
    path : "/error"
  });
});

export default Router;
