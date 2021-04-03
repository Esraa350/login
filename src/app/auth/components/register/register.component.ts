import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder, FormControl ,FormGroup} from '@angular/forms';
import {CustomValidationService} from '../services/custom-validation.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = new FormControl('', [Validators.required,Validators.minLength(3)]);
  email = new FormControl('', [Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]);
  password = new FormControl('', [Validators.required,Validators.minLength(8)]);
  userForm: FormGroup = this.builder.group({
    username: this.username,
    email:this.email,
    password: this.password
  })
    
  constructor(private builder:FormBuilder) {}
  
   ngOnInit(){

   }
   sendDataRegistration(){

   }
   getData(){

   }
   
  onSubmit(){
    if (this.userForm.invalid) {
    
      console.log("invalid");
      console.log(this.userForm.status);
      return;
  }
    console.log(this.userForm.value);
  }



}

