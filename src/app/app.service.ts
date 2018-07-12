import { Injectable } from '@angular/core';
import { EMPLOYEES } from './mock-employees';
import { EmployeeModel } from './employee.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AppService {

  readonly statuses = ['All', 'Active', 'Terminated', 'Deceased', 'Resigned', 'Trash'];

  getEmployees(): Observable<EmployeeModel[]> {
    return of(EMPLOYEES);
  }

  addNewEmployee(employee: EmployeeModel): Observable<EmployeeModel[]> {
    EMPLOYEES.push(employee);
    return of(EMPLOYEES);
  }

  getStatuses(): string[] {
    return this.statuses;
  }

  filterByStatus(employees: EmployeeModel[], status: string): EmployeeModel[] {
    return status === 'All' ? employees : employees.filter((employee) => employee.status === status);
  }
}

/*
* Add new employee should return a signle instance of an Observable,
* in fact, all services should return Observables?
*
* Nieco dat na false pri forme
*
* What are my states? (Statuses, Employees, Navigation)
* */
