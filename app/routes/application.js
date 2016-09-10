import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  localStorage: Ember.inject.service('local-storage'),
  auth: Ember.inject.service('auth'),
  init(){
    
    
    let auth = this.get("auth");
    if(auth && auth.auth0){
      var result = auth.auth0.parseHash(window.location.hash);
    }
    
    if (result && result.idToken) {
      this.get('localStorage').set('id_token', result.idToken);
      //this.saveLoginInfo(result.idToken);        
     } else if (result && result.error) {
      alert('error: ' + result.error);
    }
  },
  actions: {
    login () {
      this.get("auth").login();    
    },

    logout () {
      this.get('session').invalidate();
    }
  }
});
