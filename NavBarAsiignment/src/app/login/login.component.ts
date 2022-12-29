import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormModel } from '../Model/Formmodel';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb:FormBuilder,private cs:ServiceService,private route:Router){}
  hide:boolean=true;
  open:Boolean=false;
  list!:FormModel[];
  ngOnInit(){
    this.emp=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
    this.cs.getFormValue().subscribe(list=>{this.list=list});
  }
  emp!:FormGroup;
  submit(){
    for(let i=0;i<this.list.length;i++){
      if(this.list[i].password == this.emp.value.password && this.list[i].username==this.emp.value.username){
        this.open=true;
        this.route.navigateByUrl('/addcourse')
        break;
      }
      else{
        continue;
      }
    }
    if(!this.open){
      window.alert("Invalid Data")
    }
  }
  

}
