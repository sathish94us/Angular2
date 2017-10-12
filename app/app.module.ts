import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee-list.component';
import { DepartmentComponent } from './department-list.component';
import { DepartmentDetailComponent} from './department-detail.component';

@NgModule({
  declarations: [AppComponent,EmployeeComponent,DepartmentComponent,DepartmentDetailComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'departments',component:DepartmentComponent},
      {path:'employees', component:EmployeeComponent},
      {path:'departments/:id',component:DepartmentDetailComponent}
    ]),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
