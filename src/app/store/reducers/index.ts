import { ActionReducerMap, createSelector } from '@ngrx/store';

import * as fromEmployees from './employees.reducer';
import * as fromStatuses from './status.reducer';
import * as fromPositions from './position.reducer';
import * as fromUiState from './ui-state.reducer';
import { EmployeeStatus } from '../../models/ui-state.model';

export interface AppStateModel {
  employees: fromEmployees.EmployeeState;
  statuses: fromStatuses.StatusState;
  positions: fromPositions.PositionState;
  uiState: fromUiState.UiState;
}

export const reducers: ActionReducerMap<AppStateModel> = {
  employees: fromEmployees.reducer,
  statuses: fromStatuses.reducer,
  positions: fromPositions.reducer,
  uiState: fromUiState.reducer,
};

export const getEmployeeState = (state: AppStateModel) => state.employees;
export const getStatusesState = (state: AppStateModel) => state.statuses;
export const getPositionsState = (state: AppStateModel) => state.positions;

export const getAllEmployees = createSelector(getEmployeeState, fromEmployees.getEmployees);
export const getFilteredEmployees = ({employees, uiState}: AppStateModel) => (
  uiState.employeeFilter === EmployeeStatus.All ?
    employees.data :
    employees.data.filter(({status}) => status === uiState.employeeFilter)
);
// Old filter
// export const filterEmployees = (status: number) => createSelector(
//   getAllEmployees,
//   (
//     employees: EmployeeModel[]
//   ) => status === 1 ? employees : employees.filter((employee) => employee.status.id === status));

export const getAllStatuses = createSelector(getStatusesState, fromStatuses.getStatuses);

export const getAllPositions = createSelector(getPositionsState, fromPositions.getPositions);
