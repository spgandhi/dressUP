import { Component, OnInit } from '@angular/core';
import { Mongo } from 'meteor/mongo';
import { MeteorComponent } from 'angular2-meteor';
 
import { Wardrobe }   from '/both/collections/collections';
import { WardrobeAddComponent } from './wardrobe-add.component';
import { LoginButtons } from 'angular2-meteor-accounts-ui';

import template from './wardrobe-list.html';
 
@Component({
  selector: 'wardrobe-list',
  template,
  directives: [WardrobeAddComponent,LoginButtons]
})

export class WardrobeListComponent extends MeteorComponent implements OnInit {
  wardrobe: Mongo.Cursor<any>;
   
  constructor() {
    super();
  }

  ngOnInit() {
    this.wardrobe = Wardrobe.find();
    this.subscribe('wardrobe', () => {
      this.wardrobe = Wardrobe.find();
      }, true);
  }
 
  removeParty(wardrobe) {
    Wardrobe.remove(wardrobe._id);
  }
}