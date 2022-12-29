import { Component } from '@angular/core';
import { CourseListComponent } from '../course-list/course-list.component';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
 name!:string;
 add(){
  CourseListComponent.array.push(this.name);
  window.location.reload();
 }
}
