import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { AppService } from '../app.service';
// import { map } from 'rxjs/operators';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { combineLatest } from 'rxjs/observable/combineLatest';

import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs/Observable';
import * as fromStore from '../store';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})

export class EmployeesComponent{

  @Input() showForm: boolean;

  @Output() showFormChange = new EventEmitter<boolean>();

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

  // constructor(private store: Store<fromStore.PersonnelState>) {}
  //
  // ngOnInit() {
  //   this.store.select('').subscribe(state => {console.log(state); });
  // }
}
