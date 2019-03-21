import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { MenuComponent } from './menu/menu.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';




const routes: Routes = [
  {
    path:'student',
    component:StudentComponent
  },
  {
    path:'addstudent',
    component:AddstudentComponent
  },
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'editcustomer/:rollno',
    component:EditcustomerComponent
  },
  
  
  {
path:'',
redirectTo:'menu',
pathMatch:'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
