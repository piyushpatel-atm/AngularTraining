import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { observable, Subscription } from 'rxjs';
import { EmpserviceService } from '../empservice.service';
import { ListPrintComponent } from '../list-print/list-print.component';
import { Employee } from '../Model/Employee';
@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  clickEventsubscription!: Subscription;
  constructor(private fb: FormBuilder, private cs: EmpserviceService) {
    this.clickEventsubscription = this.cs.getClickEvent().subscribe(() => {
      this.clickme();
    })
  }

  public empArray!: Employee[];
  public employeeForm!: FormGroup;
  static getval() {
    console.log(ListPrintComponent.empobj)
  }
  // get f() {
  //   return this.employeeForm.controls;
  // }
  ngOnInit() {

    this.employeeForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      mobNo: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],

      address: ['', Validators.required],
      city: ['', Validators.required],
      gender: ['', Validators.required]

    })
  }
  onSubmit() {
    if (this.employeeForm.valid) {
      if (this.employeeForm.value.id == '') {
        this.cs.EmployeeSave(this.employeeForm.value).subscribe();
        window.location.reload();
      } else {
        this.cs.UpdateEmployee(this.employeeForm.value.id, this.employeeForm.value).subscribe();
        window.location.reload();
      }
    }else{
         window.alert("invalid data")
         window.location.reload();
    }
  }
  clickme() {
    
    this.employeeForm.setValue(ListPrintComponent.empobj);
  }
  reset() {
    this.employeeForm.reset();
  }


}
