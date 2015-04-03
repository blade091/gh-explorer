import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('application.index', { path: '/' });
  this.resource('user', {path: '/users/:login'}, function() {
    this.route('loading');
  });
});
 