import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { AppComponent } from './app.component';
import { CeoMessageComponent } from './ceo-message/ceo-message.component';
import { ContactComponent } from './contact/contact.component';
import { CourseListComponent } from './course-list/course-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:AppComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path:'course',component:CourseListComponent},
  {path:'addcourse',component:AddCourseComponent},
  {path:'ceomessage',component:CeoMessageComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
