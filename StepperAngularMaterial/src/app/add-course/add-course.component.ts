import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseListComponent } from '../course-list/course-list.component';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  constructor(private fb:FormBuilder,private cs:ServiceService){}
  public firstFormGroup!: FormGroup;
  value!:string;
  value2!:string;
  // public secondFormGroup!: FormGroup;
  ngOnInit(): void {
    this.firstFormGroup = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(32)]],
      emailId: ['', [Validators.required, Validators.email]],
      fatherName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(32)]],
      motherName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(32)]],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      mobNo: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      accountNo:[''],
      bankName:[''],
      ifscCode:[''],
      netBank:[''],
      mobBank:[''],
      presentAddress:[''],
      permanentAddress:['']

  
    })
  }
  submit(){
    if(this.firstFormGroup.valid){
    console.log(this.firstFormGroup.value);
    this.cs.setRegistrationValue(this.firstFormGroup.value).subscribe();
  }else{alert("Invalid data")}}
  remainingText=60;
  remainingText2=60;
  desc!:string;
  valueChange(value:any) {
    this.remainingText = 60 - value.length;
   }
   valueChange2(value:any) {
    this.remainingText2 = 60 - value.length;
   }


}
