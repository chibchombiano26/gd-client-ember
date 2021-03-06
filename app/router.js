import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('feed');
  this.route('protected');
  this.route('login');
  this.route('home');
  this.route('camera');
  this.route('media');
  this.route('user-profile');
});

export default Router;
