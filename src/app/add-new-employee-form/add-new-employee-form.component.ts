import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-add-new-employee-form',
  templateUrl: './add-new-employee-form.component.html',
  styleUrls: ['./add-new-employee-form.component.scss']
})
export class AddNewEmployeeFormComponent {

  readonly statuses = ['Active', 'Terminated', 'Deceased', 'Resigned', 'Trash'];
  readonly position = ['Designer', 'Writer', 'Developer', 'Admin', 'Business', 'Development', 'Content'];

  @Input() showForm: boolean;

  @Output() showFormChange = new EventEmitter<boolean>();

  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private appService: AppService) {
    this.createForm();
  }

  createForm() {
    this.employeeForm = this.fb.group({
      avatar: '',
      name: ['', Validators.required ],
      position: ['', Validators.required ],
      status: ['', Validators.required ]
    });
  }

  rebuildForm() {
    this.employeeForm.reset({
      avatar: '',
      name: '',
      position: '',
      status: ''
    });
  }

  onSubmit() {
    this.appService.addNewEmployee(this.employeeForm.value);
    this.rebuildForm();
  }
}
