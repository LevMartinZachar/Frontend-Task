import { Action } from '@ngrx/store';
import { EmployeeStatus } from '../../models/ui-state.model';

export const FILTER_EMPLOYEES = 'Filter Employees';

export class FilterEmployees implements Action {
  readonly type = FILTER_EMPLOYEES;
  constructor(public payload: EmployeeStatus) {}
}

export type UiStateActions = FilterEmployees;
