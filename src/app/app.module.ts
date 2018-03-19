import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    HeaderMenuComponent,
    EmployeesComponent,
    EmployeeComponent,
    DropdownMenuComponent,
    ViewMenuComponent,
    AddNewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
