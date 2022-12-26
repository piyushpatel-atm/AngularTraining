import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { ListPrintComponent } from './list-print/list-print.component';

const routes: Routes = [
  {path:"",component:AppComponent},
  {path:"formcomponent",component:FormComponentComponent},
  {path:"listprint",component:ListPrintComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
