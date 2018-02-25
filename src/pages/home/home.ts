import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, AbstractControl, FormControl } from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private todo : FormGroup;
  title : AbstractControl;
  description : AbstractControl;
  toggle : string;
  isSelected : AbstractControl

  logForm() {
    console.log(this.title.value);
    console.log(this.description.value);
    console.log(this.isSelected.value);
  }

  constructor(public navCtrl: NavController, translate: TranslateService, private formBuilder: FormBuilder) {
  	
  	this.todo = this.formBuilder.group({
      title: ['', this.isValid],
      description: [''],
      isSelected : ['']
    });

    this.title = this.todo.controls['title']
    this.description = this.todo.controls['description']
    this.isSelected = this.todo.controls['isSelected']
    this.title.setValue(true);
    this.toggle = this.title.value
  }

  console(){
  	console.log(this.title.value);
  }

  openFilters(){
  	this.isSelected.setValue(!this.isSelected.value)
  	this.toggle = this.isSelected.value; 
  }

  isValid(control: FormControl): any {
 
        if(control.value < 18){
            return {
                "too young": true
            };
        }
        return null;
    }

}
