import { Component, OnInit ,} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmpserviceService } from '../empservice.service';
import { FormComponentComponent } from '../form-component/form-component.component';
import { Employee } from '../Model/Employee';

@Component({
  selector: 'app-list-print',
  templateUrl: './list-print.component.html',
  styleUrls: ['./list-print.component.css']
})
export class ListPrintComponent implements OnInit {
  constructor(private fb:FormBuilder,private cs:EmpserviceService){}

  static empobj:Employee; 
  array!:Employee[];
  ngOnInit(): void {
    this.cs.EmployeeGetData().subscribe(list=>{this.array=list})
  }
  deleteEmp(id:number){
    this.cs.deleteEmployeeData(id).subscribe();
    window.location.reload();
  }
  updateEmp(data:any){
    ListPrintComponent.empobj=data;
    console.log(ListPrintComponent.empobj);
    this.cs.sendClickEvent(data);
  }

}