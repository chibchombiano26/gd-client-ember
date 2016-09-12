/*global Auth0Lock, Auth0*/
import Ember from 'ember';

export default Ember.Service.extend({
    lock : {},
    auth : {},
    init(){
      this.lock = new Auth0Lock('vDqN9QLHGSQMmf0LhrK6PvL0NmTKKixP', 'hefesoftsas.auth0.com', {
          theme: {
            logo: "http://medialoop.co.za/wp-content/themes/medialoop/images/logo.png",
            primaryColor: "#b81b1c"
          },
            languageDictionary: {
            title: "Media Loop"
          }
      });  
      
      this.auth0 = new Auth0({
          domain: 'hefesoftsas.auth0.com',
          clientID: 'vDqN9QLHGSQMmf0LhrK6PvL0NmTKKixP',
          callbackOnLocationHash: true
      })
      
      
    },
    
    getProfile(idToken){
    let promise = new Promise((res, reject) =>{
      this.lock.getProfile(idToken, (error, profile) => {
        if (error) {
          // Handle error
          reject(error);
        }

        res(profile);
    });
    })

    return promise;     
    },
      
    login(){
      this.lock.show();  
    }
    
});
