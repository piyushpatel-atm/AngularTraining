import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { amForm } from './Model/amForm';

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {

  constructor(public http: HttpClient) { }
  url: string = "  http://localhost:3000";

  setFormValue(data: amForm) {
    console.log(data);
    return this.http.post<amForm>(this.url + "/getdata", data);
  }
}
