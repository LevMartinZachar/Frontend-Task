import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as fromStore from '../store';
import { Store } from '@ngrx/store';
import { CREATE_EMPLOYEE_SUCCESS } from '../store/actions/employees.action';

@Component({
  selector: 'app-add-new-employee-form',
  templateUrl: './add-new-employee-form.component.html',
  styleUrls: ['./add-new-employee-form.component.scss']
})

export class AddNewEmployeeFormComponent {

  @Input() showForm: boolean;

  @Output() showFormChange = new EventEmitter<boolean>();

  employeeForm: FormGroup;
  statuses$ = this.store.select(fromStore.getAllStatuses);
  positions$ = this.store.select(fromStore.getAllPositions);

  createForm(): void {
    this.employeeForm = this.fb.group({
      avatar: '',
      name: ['', Validators.required ],
      position: ['', Validators.required ],
      status: ['', Validators.required ]
    });
  }

  rebuildForm(): void {
    this.employeeForm.reset({
      avatar: '',
      name: '',
      position: '',
      status: ''
    });
  }

  onSubmit(): void {
    // this.appService.addNewEmployee(this.employeeForm.value);

    this.store.dispatch({type: CREATE_EMPLOYEE_SUCCESS, payload: {
        id: Math.floor(Math.random() * 1337) + 1,
        avatar: '../assets/images/avatar.png',
        name: this.employeeForm.value.name,
        position: this.employeeForm.value.position,
        status: this.employeeForm.value.status
      }});
    this.rebuildForm();
  }

  constructor(private fb: FormBuilder, private store: Store<fromStore.AppStateModel>) {
    this.createForm();
  }
}
