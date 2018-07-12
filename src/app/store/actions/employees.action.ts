import { Action } from '@ngrx/store';
import { EmployeeModel } from '../../models/employee.model';

// load employees
export const LOAD_EMPLOYEES = 'Load Employees';
export const LOAD_EMPLOYEES_FAIL = 'Load Employees Fail';
export const LOAD_EMPLOYEES_SUCCESS = 'Load Employees Success';

export class LoadEmployees implements Action {
  readonly type = LOAD_EMPLOYEES;
}

export class LoadEmployeesFail implements Action {
  readonly type = LOAD_EMPLOYEES_FAIL;
  constructor(public payload: any) {}
}

export class LoadEmployeesSucess implements Action {
  readonly type = LOAD_EMPLOYEES_SUCCESS;
  constructor(public payload: EmployeeModel[]) {}
}

// exporting action types
export type EmployeesAction = LoadEmployees | LoadEmployeesFail | LoadEmployeesSucess;
