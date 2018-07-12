import * as fromEmployees from '../actions/employees.action';

import { EmployeeModel } from '../../models/employee.model';

export interface EmployeeState {
  data: EmployeeModel[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: EmployeeState = {
  data: [{
    id: 1,
    avatar: '../assets/images/avatar.png',
    name: 'Ashraf Hossain',
    position:
      {
        id: 1,
        name: 'Designer'
      },
    status:
      {
        id: 2,
        name: 'Active'
      }
  }],
  loaded: false,
  loading: false
};

export function reducer(state: EmployeeState = initialState, action: fromEmployees.EmployeesAction): EmployeeState {
  switch (action.type) {
    case fromEmployees.LOAD_EMPLOYEES: {
        return {
          ...state,
          loading: true
        };
    }
    case fromEmployees.LOAD_EMPLOYEES_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }
    case fromEmployees.LOAD_EMPLOYEES_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}

export const getEmployeesLoading = (state: EmployeeState) => state.loading;
export const getEmployeesLoaded = (state: EmployeeState) => state.loaded;
export const getEmployees = (state: EmployeeState) => state.data;

