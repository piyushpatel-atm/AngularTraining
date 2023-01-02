import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CeoMessageComponent } from './ceo-message/ceo-message.component';
import { ContactComponent } from './contact/contact.component';
import { CourseListComponent } from './course-list/course-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public dialog:MatDialog){}
  name!:string;
  ngOnInit() {
   this.array=CourseListComponent.array;
   console.log(this.array);
  }
  title = 'SidebarAssignment';
  array!:string[];
  openDialog1() {

    this.dialog.open(ContactComponent,{

      width: '500px',

      height:'500px'

    });
  }
  openDialog2() {

    this.dialog.open(CeoMessageComponent,{

      width: '800px',

      height:'500px'

    });
  }

}
