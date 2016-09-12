/*global Push*/
import Ember from 'ember';

export default Ember.Service.extend({
    showPush(title, body, icon){

        if(!Push){
            return;
        }

        Push.create(title, {
            body: body,
            icon: icon,
            timeout: 4000,
            onClick: function () {
                window.focus();
                this.close();
            }
        });
    }

});
