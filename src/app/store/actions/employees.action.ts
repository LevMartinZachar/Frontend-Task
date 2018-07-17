import { Action } from '@ngrx/store';
import { EmployeeModel } from '../../models/employee.model';

// load employees
export const LOAD_EMPLOYEES = 'Load Employees';

export class LoadEmployees implements Action {
  readonly type = LOAD_EMPLOYEES;
}

// create employee
export const CREATE_EMPLOYEE_SUCCESS = 'Create Employee Success';

export class CreateEmployeeSuccess implements Action {
  readonly type = CREATE_EMPLOYEE_SUCCESS;
  constructor(public payload: EmployeeModel) {}
}

// exporting action types
export type EmployeesAction =
  | LoadEmployees
  | CreateEmployeeSuccess;
