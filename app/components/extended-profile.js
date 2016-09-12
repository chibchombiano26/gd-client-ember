/*global moment, horizon*/
import Ember from 'ember';

export default Ember.Component.extend({
  localStorage: Ember.inject.service('local-storage'),
  willRender(){
     
  },
  init(){
    this._super();
    this.getExtendedProfile().then((data)=>{
         let profile = this.get('localStorage').getObject('userInfo');
         this.set('username', profile.name);
         this.set('dateOfBirthShow', moment(data.dateOfBirth).format("MM/dd/YYYY"));
         this.set('dateOfBirth', data.dateOfBirth);
     })
  },
  actions: {
      save(){
          let username = this.get("username");
          let dateOfBirth = this.get("dateOfBirth");
          let profile = this.get('localStorage').getObject('userInfo');
          horizon("Profile_Info").store({id: profile.clientID, dateOfBirth: dateOfBirth});
      }
  },
  getExtendedProfile(){
      return new Promise((resolve, reject)=>{
          let profile = this.get('localStorage').getObject('userInfo');
          horizon("Profile_Info").find(profile.clientID).fetch().subscribe((data)=>{
              resolve(data);
          })
      })
  }
  
});
