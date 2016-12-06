import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return [{
      title: "Learn Ember Routing"
    },{
      title: "Learn Ember Components"
    },{
      title: "Make awesome note app"
    },{
      title: "Party!"
    }];
  }
});
