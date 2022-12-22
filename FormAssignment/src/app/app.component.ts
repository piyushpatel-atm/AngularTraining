import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from './Model/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  email!:string;
  value!:string;
  onsubmit(){
    this.value=this.email;
  }
  ngOnInit(): void {}
 
}
