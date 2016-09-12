import Ember from 'ember';

export default Ember.Component.extend({
    localStorage: Ember.inject.service('local-storage'),
    willRender(){
        
        let profile = this.get('localStorage').getObject('userInfo');
         if(!Ember.isEmpty(profile) && profile.name){
           this.set('info', { status: 'logout'});
         }
         else{{
            this.set('info', { status: 'login'});
         }}
    }
});
