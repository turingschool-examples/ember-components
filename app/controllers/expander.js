import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggled () {
      console.log('controller toggle showing');
    }
  },
});
