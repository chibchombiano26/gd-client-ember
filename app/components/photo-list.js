/* global horizon, Promise*/
import Ember from 'ember';

export default Ember.Component.extend({
     
     willRender() {
        this.getData().then((data)=>{
             this.set('images', data);
        })
      },
      
      init(){
        this._super();
        horizon("Images").watch({rawChanges: false}).subscribe((e)=>{
            this.set('images', e);
        })
        
      },
      getData(){
           
         return new Promise((res)=>{
              
          horizon("Images").fetch().subscribe((e)=>{
              res(e);
          })
             
        })
           
      }
});
