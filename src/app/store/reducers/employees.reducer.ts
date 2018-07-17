import * as fromEmployees from '../actions/employees.action';
import * as jsondata from '../../../db.json';

import { EmployeeModel } from '../../models/employee.model';

const jsonEmployeesStringifyed = (<any>jsondata).employees.map(JSON.stringify);
const jsonEmployeesParsed = jsonEmployeesStringifyed.map(JSON.parse);

export interface EmployeeState {
  data: EmployeeModel[];
}

export const initialState: EmployeeState = {
  data: jsonEmployeesParsed,
};

export function reducer(state: EmployeeState = initialState, action: fromEmployees.EmployeesAction): EmployeeState {
  switch (action.type) {
    case fromEmployees.LOAD_EMPLOYEES: {
        return {
          ...state,
        };
    }
    case fromEmployees.CREATE_EMPLOYEE_SUCCESS: {
      return {
        ...state,
        data: [
          action.payload,
          ...state.data,
        ]
      };
    }
  }

  return state;
}

export const getEmployees = (state: EmployeeState) => state.data;

