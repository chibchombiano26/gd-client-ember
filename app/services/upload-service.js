/*global Promise*/
import Ember from 'ember';

export default Ember.Service.extend({
    
  
    uploadFile(url, params, files){
         return new Promise((resolve, reject) => {
            
            let formData = new FormData();
            let xhr = new XMLHttpRequest();

            for (let i = 0; i < files.length; i++) {
                formData.append("uploads", files[i], files[i].name);
            }

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr);
                    } else {
                     reject("error");
                   }
                }
            };

            xhr.upload.onprogress = (event) => {
                console.log(event);
            };

            xhr.open('POST', url, true);
            xhr.send(formData);

        });
    }
    
});
