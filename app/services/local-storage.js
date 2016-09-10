/*global localStorage*/
import Ember from 'ember';

export default Ember.Service.extend({
    localStorage,
    init(){
        if (typeof(Storage) !== "undefined") {
            this.localStorage = localStorage;
        } else {
            throw new Error('Current browser does not support Local Storage');
        }
    },
    set(key, value) {
        this.localStorage[key] = value;
    },

    get(key) {
        return this.localStorage[key] || false;
    },

    setObject(key, value) {
        this.localStorage[key] = JSON.stringify(value);
    },

    getObject(key) {
        return JSON.parse(this.localStorage[key] || '{}');
    },

    remove(key) {
        this.localStorage.removeItem(key);
    }
    
});
