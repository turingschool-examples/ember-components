import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return [{
      title: 'Doctor Strange',
      content: "After his career is destroyed, a brilliant but arrogant surgeon gets a new lease on life when a sorcerer takes him under his wing and trains him to defend the world against evil."
    },{
      title: 'Arrival',
      content: "Linguistics professor Louise Banks (Amy Adams) leads an elite team of investigators when gigantic spaceships touch down in 12 locations around the world."
    },{
      title: 'Moana',
      content: "A sweeping, CG-animated adventure about a spirited teenager who sails out on a daring mission to prove herself a master wayfinder and fulfill her ancestors' unfinished quest."
    },{
      title: 'Kong: Skull Island',
      content: "Explorers (Tom Hiddleston, Samuel L. Jackson, John Goodman) encounter a gigantic ape and other monstrous creatures after traveling to an uncharted island in the Pacific Ocean."
    }];
  }
});
