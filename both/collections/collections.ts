import {Mongo} from 'meteor/mongo';
 
export const Wardrobe = new Mongo.Collection('wardrobe');


function loggedIn() {
  return !!Meteor.user();
}
 
Wardrobe.allow({
  insert: loggedIn,
  update: loggedIn,
  remove: loggedIn
});