import { ActionReducerMap } from '@ngrx/store';

import * as fromEmployees from './employees.reducer';

export interface PersonnelState {
  employees: fromEmployees.EmployeeState;
}

export const reducers: ActionReducerMap<PersonnelState> = {
  employees: fromEmployees.reducer,
};
