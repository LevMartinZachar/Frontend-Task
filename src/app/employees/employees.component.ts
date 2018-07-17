import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromStore from '../store';

import { EmployeeStatus } from '../models/ui-state.model';
import { FilterEmployees } from '../store/actions/ui-state.actions';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})

export class EmployeesComponent {

  @Input() showForm: boolean;

  @Output() showFormChange = new EventEmitter<boolean>();

  statuses$ = this.store.select(fromStore.getAllStatuses);
  employees$ = this.store.select(fromStore.getFilteredEmployees);
  // readonly status$ = new BehaviorSubject('All');
  // // readonly chosenView$ = new BehaviorSubject(viewOption.Grid);
  //
  // // map(employees => employees.filter(employees => this.appService.filterByStatus(employees, status)))
  //
  // readonly employees$ = combineLatest(
  //   this.appService.getEmployees(),
  //   this.status$,
  // ).pipe(
  //   // tap((data) => console.log('data', data)),
  //   map(([employees, status]) => this.appService.filterByStatus(employees, status)),
  // );
  //
  // readonly statuses: string[] = this.appService.getStatuses();
  //
  // constructor(private appService: AppService) { }
  //
  // filterByStatus(status: string): void {
  //   // this.appService.filterByStatus(status).subscribe(employees => this.employees = employees);
  //   this.status$.next(status);
  // }
  // changeView(view: viewOption): void {
  //   this.chosenView$.next(view);
  // }

  filterByStatus(status: EmployeeStatus): void {
    this.store.dispatch(new FilterEmployees(status));
  }

  constructor(private store: Store<fromStore.AppStateModel>) {}
}
