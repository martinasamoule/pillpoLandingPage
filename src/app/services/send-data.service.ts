import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment.prod';
import { Icontactus } from './../models/icontactus';
import { Isubscribe } from './../models/isubscribe';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {

  constructor(private httpClient:HttpClient) { }

  sendContactusForm(contactusInfo:Icontactus){
    return this.httpClient.post(`${environment.baseUrl}/emails/contact-us`,contactusInfo)

  }

  sendSubscribeForm( subscribeInfo:Isubscribe ){
    return this.httpClient.post(`${environment.baseUrl}/updates-subscribers`,subscribeInfo)

  }
}
