import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { MenuComponent } from './menu/menu.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    AddstudentComponent,
    MenuComponent,
    EditcustomerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
