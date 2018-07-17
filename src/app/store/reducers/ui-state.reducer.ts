import { EmployeeStatus, UiStateModel } from '../../models/ui-state.model';
import { FILTER_EMPLOYEES, FilterEmployees, UiStateActions } from '../actions/ui-state.actions';
import { AppStateModel } from './index';

export type UiState = UiStateModel;

const initialState: UiState = {
  employeeFilter: EmployeeStatus.Active,
};

export function reducer(state: UiState = initialState, action: UiStateActions): UiState {
  switch (action.type) {
    case FILTER_EMPLOYEES: {
        return {
          ...state,
          employeeFilter: (action as FilterEmployees).payload
        };
    }
  }

  return state;
}

export const getEmployeeFilter = ({uiState}: AppStateModel) => uiState.employeeFilter;
