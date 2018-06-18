import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EmployeeModel } from '../employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeComponent {
  @Input() employee: EmployeeModel;
}
