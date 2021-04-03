import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder, FormControl ,FormGroup} from '@angular/forms';
import {CustomValidationService} from '../services/custom-validation.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
//email validator//note
export class LoginComponent implements OnInit {
  username = new FormControl('', [Validators.required,Validators.minLength(3)]);
  password = new FormControl('', [Validators.required,Validators.minLength(8)]);

  userForm: FormGroup = this.builder.group({
    username: this.username,
    password: this.password
  });

  constructor(private builder: FormBuilder) { }
   ngOnInit(){
   }
   sendDataLogin(){

   }
   getData(){

   }
  onSubmit(){
    if (this.userForm.invalid) {
      console.log("invalid");
      return;
  }
    console.log(this.userForm.value);
  }

}
