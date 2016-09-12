import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Meteor } from 'meteor/meteor'

import {Wardrobe} from '/both/collections/collections'; 
import template from './wardrobe-add.html';
 
@Component({
  selector: 'wardrobe-add',
  template,
  directives: [REACTIVE_FORM_DIRECTIVES]
})

export class WardrobeAddComponent implements OnInit {
  addForm: FormGroup;
 
  constructor(private formBuilder: FormBuilder) {}
 
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      url: ['', Validators.required]
    });
  }

  resetForm() {
  	this.addForm.controls['name']['updateValue']('');
    this.addForm.controls['url']['updateValue']('');
  }

  addWardrobeItem() {
    if (this.addForm.valid) {
      if(Meteor.userId()){
        Wardrobe.insert(Object.assign({}, this.addForm.value, { owner: Meteor.userId() }));
        this.resetForm();
      } else {
        alert('please login to post');
      }
    }
  	
  }
}