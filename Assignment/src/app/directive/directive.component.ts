import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  count:number=0;
  para:string="";
  array:number[]=[];
  increase(){
    this.para="My name is piyush patel"
    this.count+=1;
    this.array.push(this.count);
  }
}
