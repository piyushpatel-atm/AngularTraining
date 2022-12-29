import { Component, OnInit } from '@angular/core';
import { CourseListComponent } from './course-list/course-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  name!:string;
  ngOnInit() {
   this.array=CourseListComponent.array;
   console.log(this.array);
  }
  title = 'SidebarAssignment';
  array!:string[];


}
