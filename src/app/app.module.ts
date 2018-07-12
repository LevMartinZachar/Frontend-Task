import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

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
import { AppService } from './app.service';
import { AddNewEmployeeFormComponent } from './add-new-employee-form/add-new-employee-form.component';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
//
import { reducers } from './store';
import { EffectsModule } from '@ngrx/effects';

// import { StoreDevtools } from '@ngrx/store-devtools';
// import { storeFreeze } from 'ngrx-store-freeze';


@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    HeaderMenuComponent,
    EmployeesComponent,
    EmployeeComponent,
    DropdownMenuComponent,
    ViewMenuComponent,
    AddNewEmployeeComponent,
    AddNewEmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot({reducers})
    // EffectsModule.forRoot([])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
