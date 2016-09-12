/* global horizon, Promise*/
import Ember from 'ember';
const URLUPLOAD = 'http://geek-developers-server.7c5d756b.svc.dockerapp.io:8081/api/';

export default Ember.Component.extend({
    
  tagName: 'input',
  type: 'file',
  attributeBindings: ['type', 'value'],
  uploadService: Ember.inject.service('upload-service'),

  addChangeListenerToElement: Ember.on('didInsertElement', function() {
    let input = this.$()[0];

    input.onchange = (event) => {
        
      let files = event.target.files;
      this.get('uploadService').uploadFile(URLUPLOAD, [], files).then((e)=>{
          horizon("Images").store({url: e.response, date : new Date()});
      })
    };
  })
});
