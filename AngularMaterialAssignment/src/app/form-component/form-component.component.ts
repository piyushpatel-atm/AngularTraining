import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormserviceService } from '../formservice.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  constructor(private fb: FormBuilder, private cs: FormserviceService) { }
  emp!: FormGroup;
  hide = true;
  ngOnInit(): void {
    this.emp = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(32)]],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern('^[A-Za-z0-9]+$')]],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      mobNo: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      skill: ['', Validators.required]
    })
  }
  submit() {
    if (this.emp.valid) {
      this.cs.setFormValue(this.emp.value).subscribe();
      window.location.reload();
    }
    else {
      alert("Invalid Data Enter")
    }
  }

}
