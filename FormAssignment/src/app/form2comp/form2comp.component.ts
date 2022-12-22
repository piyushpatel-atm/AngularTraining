import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../Model/Employee';
import { Form2 } from '../Model/Form2';

@Component({
  selector: 'app-form2comp',
  templateUrl: './form2comp.component.html',
  styleUrls: ['./form2comp.component.css']
})
export class Form2compComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  stu: Form2[] = [];

  studentform!: FormGroup;

  emailpattern!: "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  namepattern!: "^[a-zA-Z ]{2,20}$";

  ngOnInit(): void {


    this.studentform = this.fb.group({
      status: ['', [Validators.required]],
      sname: ['', [Validators.required, Validators.pattern(this.namepattern)]],
      email: ['', [Validators.required, Validators.email]]

    })
  }


  onSubmit() {
    if (this.studentform.valid) {
      if (this.studentform.value.sname != 'Test') {
        let r = this.studentform.value;
        console.log(r)
        alert("Data Submitted successfully")
      } else {
        window.alert("This 'Test' name is not allow")
      }
    }else{
      alert("Data not Submitted")
    }
  }
}

