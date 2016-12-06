import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'h4',
  isShowing: false,
  actions: {
    toggleShowing () {
      this.toggleProperty('isShowing');

      // this.sendAction('toggledIsShowing');
    }
  }
});
