import { Injectable } from '@angular/core';
import { EMPLOYEES } from './mock-employees';
import { EmployeeModel } from './employee.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// Has been replaced by store

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
