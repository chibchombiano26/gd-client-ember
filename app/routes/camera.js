import Ember from 'ember';

export default Ember.Route.extend({
    myConstraints: { 
        video: false, 
        audio: false
    }
});
