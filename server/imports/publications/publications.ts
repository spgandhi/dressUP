import {Wardrobe} from '/both/collections/collections';
import {Meteor} from 'meteor/meteor';
 
Meteor.publish('wardrobe', () => Wardrobe.find());