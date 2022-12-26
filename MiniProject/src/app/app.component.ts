import { Component } from '@angular/core';
import { Employee } from './Model/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miniProject';
  message!:Employee;
  resmessage($event: Employee){
    this.message=$event;
  }
}
