/*global horizon*/
import Ember from 'ember';

export default Ember.Component.extend({
     willRender() {
        this.getData().then((data)=>{
             this.set('images', data);
        })
      },
      
      init(){
        this._super();
        horizon("Image_Profile").watch({rawChanges: false}).subscribe((e)=>{
            this.set('images', e);
        })
        
      },
      getData(){
           
         return new Promise((res)=>{
              
          horizon("Image_Profile").fetch().subscribe((e)=>{
              res(e);
          })
             
        })
           
      }
});
