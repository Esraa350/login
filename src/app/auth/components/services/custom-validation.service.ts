import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  constructor(private client:HttpClient){console.log('service') }
  readonly baseURL:string="http://";
  getUser(){
    //fetch userLogin
    this.client.get
  }
  setUser(){
    //register
  }
}
