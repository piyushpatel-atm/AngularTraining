import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormModel } from './Model/Formmodel';
import { RegisterModel } from './Model/RegisterModel';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http: HttpClient) { }
  url: string = "http://localhost:3000";
  setFormValue(data: FormModel) {
    console.log(data)
    return this.http.post<FormModel>(this.url + "/getdata", data);
  }
  getFormValue(): Observable<FormModel[]> {
    return this.http.get<FormModel[]>(this.url + "/getdata");
  }
  setRegistrationValue(data: RegisterModel) {
    console.log(data)
    return this.http.post<RegisterModel>(this.url + "/getAlldata", data);
  }
}
