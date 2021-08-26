import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent {

signupForm: FormGroup 

  constructor(
    private _builder: FormBuilder
  ) { 
  
    this.signupForm = this._builder.group({
      user: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]
    })
  }


}
