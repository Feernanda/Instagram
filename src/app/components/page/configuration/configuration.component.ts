import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

signupForm: FormGroup

  constructor( private _builder: FormBuilder) { 
    this.signupForm = this._builder.group({
      nombre: [''],
      usuario: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])] ,
      clave: ['', Validators.required]
    })
  }
  

  
  ngOnInit(): void {
  }

  enviar(){
    
  }




}
