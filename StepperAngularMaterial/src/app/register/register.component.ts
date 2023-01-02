import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder, private cs: ServiceService) { }
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
      skill: ['', Validators.required],
      username: ['', Validators.required]
    })
  }
  submit() {
    if (this.emp.valid) {
      console.log(this.emp.value);
      this.cs.setFormValue(this.emp.value).subscribe();
      window.location.reload();
     
    }
    else {
      alert("Invalid Data Enter")
    }
  }


}
