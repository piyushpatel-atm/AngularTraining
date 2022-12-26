import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './Model/Employee';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
  constructor(public http: HttpClient) { }
  url: string = "http://localhost:3000";
  private subject = new Subject();
  sendClickEvent(data:Employee) {
     this.subject.next(data);
     
  }
  getClickEvent() {
     return this.subject.asObservable();
    
  }
  EmployeeSave(stu: Employee) {
    return this.http.post<Employee>(this.url + "/getAllData", stu);

  }

  EmployeeGetData(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url + "/getAllData");
  }

  deleteEmployeeData(sid: number) {
    return this.http.delete(this.url + "/getAllData/" + sid);
  }
  UpdateEmployee(id: any, data: any) {
    console.log(data);
    return this.http.put(this.url + "/getAllData/" + id, data);
  }
}
