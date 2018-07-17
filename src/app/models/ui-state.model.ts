export const enum EmployeeStatus {
  All = 'All',
  Active = 'Active',
  Terminated = 'Terminated',
  Deceased = 'Deceased',
  Resigned = 'Resigned',
  Trash = 'Trash',
}

export interface UiStateModel {
  employeeFilter: string;
}
