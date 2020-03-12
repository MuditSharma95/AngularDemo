import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { employeeDetailsComponent } from './EmployeeDetails/employeeDetails.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'employeeDetails', component: employeeDetailsComponent },
    ]),
  ],
  exports: [
    RouterModule 
  ]

})
export class AppRoutingModule { }
