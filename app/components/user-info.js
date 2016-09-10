import Ember from 'ember';

export default Ember.Component.extend({
    localStorage: Ember.inject.service('local-storage'),
    auth: Ember.inject.service('auth'),
    willRender(){
        let token = this.get('localStorage').get('id_token');
    
        if(token){
          this.get("auth").getProfile(token).then((info)=>{
            this.set('info', info);
          })
        }
    }
});
