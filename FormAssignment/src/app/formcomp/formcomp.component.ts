import { Component } from '@angular/core';
import { Employee } from '../Model/Employee';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Validator } from '@angular/forms';

@Component({
  selector: 'app-formcomp',
  templateUrl: './formcomp.component.html',
  styleUrls: ['./formcomp.component.css']
})
export class FormcompComponent {
  constructor(private fb:FormBuilder){}    
    email:string="";
    password:string="";
    subs:string="";
    array2:Employee[]=[];
    array:Employee[]=[];
    public studform!:FormGroup;
    ngOnInit(): void {


      this.studform=this.fb.group({
        subs:[''],
        password:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]]
     
      })
    }
    clickme(){
        this.array2=this.array;
    }
    submit(){
      if(this.studform.valid){
      let emp=new Employee();
      emp.mail=this.studform.value.email;
      emp.password=this.studform.value.password;
      emp.subs=this.studform.value.subs;
      this.array?.push(emp);
      console.log("print")
    }else{
      alert("Input valid data")
    }
  }
}
