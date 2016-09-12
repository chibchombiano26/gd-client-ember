/*global horizon*/
import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  localStorage: Ember.inject.service('local-storage'),
  auth: Ember.inject.service('auth'),
  pushService : Ember.inject.service('push'),
  
  
  init(){
    
    
    let auth = this.get("auth");
    if(auth && auth.auth0){
      var result = auth.auth0.parseHash(window.location.hash);
    }
    
    if (result && result.idToken) {
      this.get('localStorage').set('id_token', result.idToken);
     } else if (result && result.error) {
      alert('error: ' + result.error);
    }
    
    this.onNewImage();
  },
  onNewImage(){
    
    horizon("Images")
      .order("date", "descending")
      .limit(1).watch().subscribe(images => {
          this.get('pushService').showPush("Hey !!", "A new image is here", images[0].url);
      });
  },
  actions: {
    login () {
      this.get("auth").login();    
    },

    logout () {
      this.get('session').invalidate();
    },
    //Navigation
    gotoFeed(){
      this.router.transitionTo('feed');
    },
    takeSnapShot(){
      this.router.transitionTo('media');
    },
    video(){
      this.router.transitionTo('camera');
    },
    profile(){
      this.router.transitionTo('user-profile');
    }
  }
});
