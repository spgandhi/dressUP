import {loadWardrobe} from './imports/fixtures/wardrobe';
import {Meteor} from 'meteor/meteor';

import './imports/publications/publications';

Meteor.startup(() => {
  // load initial Parties
  loadWardrobe();
});